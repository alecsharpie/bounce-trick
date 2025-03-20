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
  // Make character public so InputManager can access it
  public character: Character;
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
    
    // Store the game instance in window so the InputManager can access it
    // This is a bit hacky but allows direct communication
    (window as any).__gameInstance = this;
    console.log("Game instance stored in window.__gameInstance");
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

    // We don't check for a drawn path here anymore
    // The path is now only applied when the user finishes drawing (handled in InputManager)
    
    // Make sure the torso visual guide is always displayed
    this.character.showTorsoVisual();

    // Update character based on physics and input
    this.character.update(
      deltaTime,
      this.inputManager.getRotationInput(),
      this.inputManager.getShapeInput()
    );

    // Always show torso visual guide
    if (this.character instanceof Character) {
      this.character.showTorsoVisual();
    }

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
    const isDrawingMode = this.inputManager.isInDrawingMode();
    const drawnPathLength = this.inputManager.getDrawnPath().length;

    let debugInfo = `
      Character Position: ${charPos.x.toFixed(2)}, ${charPos.y.toFixed(2)}, ${charPos.z.toFixed(2)}<br>
      Character Velocity: ${charVel.x.toFixed(2)}, ${charVel.y.toFixed(2)}, ${charVel.z.toFixed(2)}<br>
      Rotation Speed: ${this.character.getRotationSpeed().toFixed(2)}<br>
      Current Shape: ${this.inputManager.getShapeInput()}<br>
      Drawing Mode: ${isDrawingMode ? 'Active' : 'Inactive'}<br>
      Drawn Path Points: ${drawnPathLength}<br>
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

    // Clear any custom shapes
    this.inputManager.clearDrawnPath();
    this.character.resetToDefaultShape();

    // Start the game again
    if (!this.isRunning) {
      this.start();
    }
  }
  
  /**
   * Show visual feedback when a shape is successfully applied
   */
  private showShapeAppliedFeedback(): void {
    // Create a feedback element if it doesn't exist
    let feedback = document.getElementById('shape-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.id = 'shape-feedback';
      feedback.style.position = 'absolute';
      feedback.style.top = '40%';
      feedback.style.left = '50%';
      feedback.style.transform = 'translate(-50%, -50%)';
      feedback.style.fontSize = '28px';
      feedback.style.fontWeight = 'bold';
      feedback.style.color = 'rgba(50, 255, 100, 0.9)';
      feedback.style.textShadow = '0 0 10px rgba(0, 0, 0, 0.7)';
      feedback.style.pointerEvents = 'none';
      feedback.style.zIndex = '20';
      feedback.style.opacity = '0';
      feedback.style.transition = 'opacity 0.2s ease-in-out';
      document.body.appendChild(feedback);
    }
    
    // Update text and show the feedback
    feedback.textContent = 'Shape Applied!';
    feedback.style.opacity = '1';
    
    // Hide after a short delay
    setTimeout(() => {
      if (feedback) {
        feedback.style.opacity = '0';
      }
    }, 1200);
  }
}
