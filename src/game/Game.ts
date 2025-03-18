// Game class implementation
import { Renderer } from '../rendering/Renderer';
import { InputManager } from './InputManager';
import { Physics } from './Physics';
import { ScoreManager } from './ScoreManager';
import { Character, Trick } from '../entities/Character';
import { Trampoline } from '../entities/Trampoline';
import { Environment } from '../entities/Environment';

export class Game {
  private renderer: Renderer;
  private physics: Physics;
  private inputManager: InputManager;
  private scoreManager: ScoreManager;
  private character: Character;
  private trampoline: Trampoline;
  // Provides background visuals
  private readonly environment: Environment;
  private lastTime: number = 0;
  private isRunning: boolean = false;
  private lastTrick: Trick | null = null;
  private lastLandingQuality: number = 0;
  private showDebugInfo: boolean = false;

  constructor() {
    this.renderer = new Renderer();
    this.physics = new Physics();
    this.inputManager = new InputManager();
    this.scoreManager = new ScoreManager();
    this.environment = new Environment(this.renderer.scene);
    this.trampoline = new Trampoline(this.renderer.scene);
    this.character = new Character(this.renderer.scene);

    // Add CSS animations
    this.addCssAnimations();
  }

  public start(): void {
    this.isRunning = true;
    this.lastTime = performance.now();

    // Initialize input and UI
    this.inputManager.initialize();
    this.inputManager.createScoreDisplay();
    this.inputManager.createTrickDisplay();

    // Add event listeners
    this.setupEventListeners();

    // Start the game loop
    this.gameLoop();
  }

  private setupEventListeners(): void {
    // Handle window resize
    window.addEventListener('resize', () => {
      this.renderer.onResize();
    });

    // Debug toggle with keyboard
    window.addEventListener('keydown', (event) => {
      if (event.code === 'KeyD') {
        this.showDebugInfo = !this.showDebugInfo;
        this.updateDebugInfo();
      }
      // Reset character position if it gets stuck
      if (event.code === 'KeyR') {
        this.resetCharacterPosition();
      }
    });
  }

  private resetCharacterPosition(): void {
    // Reset character to above the trampoline
    this.character.bounce(5); // Small bounce to reset
  }

  private updateDebugInfo(): void {
    let debugElement = document.getElementById('debug-info');

    if (this.showDebugInfo) {
      if (!debugElement) {
        debugElement = document.createElement('div');
        debugElement.id = 'debug-info';
        debugElement.style.position = 'absolute';
        debugElement.style.top = '10px';
        debugElement.style.left = '10px';
        debugElement.style.fontSize = '12px';
        debugElement.style.color = 'white';
        debugElement.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        debugElement.style.padding = '10px';
        debugElement.style.fontFamily = 'monospace';
        debugElement.style.zIndex = '100';
        document.body.appendChild(debugElement);
      }
    } else if (debugElement) {
      document.body.removeChild(debugElement);
    }
  }

  private addCssAnimations(): void {
    // Add CSS animations for trick display and point popups
    const style = document.createElement('style');
    style.textContent = `
      @keyframes trickPopup {
        0% { transform: scale(0.5); opacity: 0; }
        20% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes pointsPopup {
        0% { transform: translateY(20px); opacity: 0; }
        20% { transform: translateY(-10px); opacity: 1; }
        80% { transform: translateY(-20px); opacity: 1; }
        100% { transform: translateY(-50px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  private gameLoop(): void {
    if (!this.isRunning) return;

    const currentTime = performance.now();
    const deltaTime = Math.min((currentTime - this.lastTime) / 1000, 0.1); // Convert to seconds, cap at 0.1s to prevent large jumps
    this.lastTime = currentTime;

    // Update physics
    this.physics.update(deltaTime);

    // Update character based on physics and input
    this.character.update(
      deltaTime,
      this.inputManager.getRotationInput(),
      this.inputManager.getShapeInput()
    );

    // Update trampoline
    this.trampoline.update(deltaTime);

    // Check for collisions
    if (this.physics.checkCollision(this.character, this.trampoline)) {
      const landingQuality = this.physics.calculateLandingQuality(
        this.character
      );
      const bounceForce = this.physics.calculateBounceForce(landingQuality);
      this.character.bounce(bounceForce);

      // Calculate score for the jump
      const trick = this.character.getCurrentTrick();
      if (trick) {
        const points = this.scoreManager.calculatePoints(trick, landingQuality);
        this.scoreManager.addPoints(points);

        // Update UI
        document.getElementById('score-display')!.textContent =
          this.scoreManager.getScore().toString();

        // Display trick name
        this.inputManager.displayTrick(trick);

        // Store trick info for debug
        this.lastTrick = trick;
        this.lastLandingQuality = landingQuality;
      }
    }

    // Update debug info if enabled
    if (this.showDebugInfo) {
      this.updateDebugDisplay();
    }

    // Render the scene
    this.renderer.render();

    // Continue the game loop
    requestAnimationFrame(() => this.gameLoop());
  }

  private updateDebugDisplay(): void {
    const debugElement = document.getElementById('debug-info');
    if (!debugElement) return;

    const charPos = this.character.getPosition();
    const charVel = this.character.getVelocity();

    let debugInfo = `
      Character Position: ${charPos.x.toFixed(2)}, ${charPos.y.toFixed(2)}, ${charPos.z.toFixed(2)}<br>
      Character Velocity: ${charVel.x.toFixed(2)}, ${charVel.y.toFixed(2)}, ${charVel.z.toFixed(2)}<br>
      Rotation Speed: ${this.character.getRotationSpeed().toFixed(2)}<br>
      Current Shape: ${this.inputManager.getShapeInput()}<br>
      FPS: ${((1 / (performance.now() - this.lastTime)) * 1000).toFixed(1)}<br>
      <br>
      Last Trick: ${this.lastTrick ? this.lastTrick.type : 'None'}<br>
      Landing Quality: ${this.lastLandingQuality.toFixed(2)}<br>
      Score: ${this.scoreManager.getScore()}<br>
      High Score: ${this.scoreManager.getHighScore()}<br>
    `;

    debugElement.innerHTML = debugInfo;
  }

  public stop(): void {
    this.isRunning = false;
  }

  public restart(): void {
    // Reset the game state
    this.scoreManager.resetScore();
    this.resetCharacterPosition();

    // Start the game again
    if (!this.isRunning) {
      this.start();
    }
  }
}
