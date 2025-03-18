import { Renderer } from '../rendering/Renderer';
import { InputManager } from './InputManager';
import { Physics } from './Physics';
import { ScoreManager } from './ScoreManager';
import { Character } from '../entities/Character';
import { Trampoline } from '../entities/Trampoline';
import { Environment } from '../entities/Environment';

export class Game {
  private renderer: Renderer;
  private physics: Physics;
  private inputManager: InputManager;
  private scoreManager: ScoreManager;
  private character: Character;
  private trampoline: Trampoline;
  private environment: Environment;
  private lastTime: number = 0;
  private isRunning: boolean = false;

  constructor() {
    this.renderer = new Renderer();
    this.physics = new Physics();
    this.inputManager = new InputManager();
    this.scoreManager = new ScoreManager();
    this.environment = new Environment(this.renderer.scene);
    this.trampoline = new Trampoline(this.renderer.scene);
    this.character = new Character(this.renderer.scene);
  }

  public start(): void {
    this.isRunning = true;
    this.lastTime = performance.now();
    this.inputManager.initialize();
    this.gameLoop();

    // Handle window resize
    window.addEventListener('resize', () => {
      this.renderer.onResize();
    });
  }

  private gameLoop(): void {
    if (!this.isRunning) return;

    const currentTime = performance.now();
    const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
    this.lastTime = currentTime;

    // Update physics
    this.physics.update(deltaTime);
    
    // Update character based on physics and input
    this.character.update(deltaTime, this.inputManager.getRotationInput(), this.inputManager.getShapeInput());
    
    // Update trampoline
    this.trampoline.update(deltaTime);
    
    // Check for collisions
    if (this.physics.checkCollision(this.character, this.trampoline)) {
      const landingQuality = this.physics.calculateLandingQuality(this.character);
      const bounceForce = this.physics.calculateBounceForce(landingQuality);
      this.character.bounce(bounceForce);
      
      // Calculate score for the jump
      const trick = this.character.getCurrentTrick();
      if (trick) {
        const points = this.scoreManager.calculatePoints(trick, landingQuality);
        this.scoreManager.addPoints(points);
        // Update UI
        document.getElementById('score-display')!.textContent = this.scoreManager.getScore().toString();
      }
    }

    // Render the scene
    this.renderer.render();

    // Continue the game loop
    requestAnimationFrame(() => this.gameLoop());
  }

  public stop(): void {
    this.isRunning = false;
  }
}