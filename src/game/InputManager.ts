import * as THREE from 'three';
import nipplejs from 'nipplejs';
import { Point } from '../rendering/ShapeSystem';

export class InputManager {
  private rotationInput: THREE.Vector2;
  private currentShape: string;
  private joystick: any; // nipplejs joystick instance
  private keyState: { [key: string]: boolean };
  private shapeButtons: { [key: string]: HTMLButtonElement };

  // Drawing mode properties
  private isDrawingMode: boolean = false;
  private isDrawing: boolean = false;
  private drawnPath: Point[] = [];
  private drawingCanvas: HTMLCanvasElement | null = null;
  private drawingContext: CanvasRenderingContext2D | null = null;

  constructor() {
    this.rotationInput = new THREE.Vector2(0, 0);
    this.currentShape = 'straight';
    this.keyState = {};
    this.shapeButtons = {};

    // InputManager initialization complete
  }

  public initialize(): void {
    // Set up keyboard controls
    this.setupKeyboardControls();

    // Create joystick (nipplejs)
    this.createJoystick();

    // Create drawing canvas
    this.createDrawingCanvas();
  }

  private setupKeyboardControls(): void {
    // Set up keyboard listeners
    window.addEventListener('keydown', (event) => {
      this.keyState[event.code] = true;

      // Toggle drawing mode with 'D' key
      if (event.code === 'KeyD') {
        this.toggleDrawingMode();
      }
    });

    window.addEventListener('keyup', (event) => {
      this.keyState[event.code] = false;
    });
  }

  private createJoystick(): void {
    // Create joystick container
    const joystickContainer = document.createElement('div');
    joystickContainer.id = 'joystick-container';
    joystickContainer.style.position = 'absolute';
    joystickContainer.style.bottom = '100px';
    joystickContainer.style.left = '100px';
    joystickContainer.style.width = '120px';
    joystickContainer.style.height = '120px';
    document.body.appendChild(joystickContainer);

    // Create joystick
    this.joystick = nipplejs.create({
      zone: joystickContainer,
      mode: 'static',
      position: { left: '50%', top: '50%' },
      color: 'rgba(255, 255, 255, 0.5)',
      size: 120,
    });

    // Set up joystick event listeners
    this.joystick.on('move', (_event: any, data: any) => {
      const angle = data.angle.radian;
      const force = Math.min(1, data.force / 50);

      // Convert to normalized x, y input
      this.rotationInput.x = Math.cos(angle) * force;
      this.rotationInput.y = Math.sin(angle) * force;
    });

    this.joystick.on('end', () => {
      // Reset input when joystick is released
      this.rotationInput.set(0, 0);
    });
  }

  // Shape button methods removed as per requirements

  // Create score display
  public createScoreDisplay(): void {
    const scoreDisplay = document.createElement('div');
    scoreDisplay.id = 'score-display';
    scoreDisplay.style.position = 'absolute';
    scoreDisplay.style.top = '20px';
    scoreDisplay.style.right = '20px';
    scoreDisplay.style.fontSize = '24px';
    scoreDisplay.style.fontWeight = 'bold';
    scoreDisplay.style.color = 'white';
    scoreDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    scoreDisplay.textContent = '0';
    document.body.appendChild(scoreDisplay);
  }

  // Create trick display
  public createTrickDisplay(): void {
    const trickDisplay = document.createElement('div');
    trickDisplay.id = 'trick-display';
    trickDisplay.style.position = 'absolute';
    trickDisplay.style.top = '60px';
    trickDisplay.style.right = '20px';
    trickDisplay.style.fontSize = '18px';
    trickDisplay.style.color = 'white';
    trickDisplay.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    trickDisplay.textContent = '';
    document.body.appendChild(trickDisplay);
  }

  public getRotationInput(): THREE.Vector2 {
    // Also apply keyboard rotation if joystick is not being used
    if (this.rotationInput.length() < 0.1) {
      if (this.keyState['ArrowLeft']) {
        this.rotationInput.x = -1;
      } else if (this.keyState['ArrowRight']) {
        this.rotationInput.x = 1;
      }
    }

    return this.rotationInput;
  }

  public getShapeInput(): string {
    return this.currentShape;
  }

  /**
   * Get the current drawn path
   * @returns Array of points representing the drawn path
   */
  public getDrawnPath(): Point[] {
    return [...this.drawnPath];
  }

  /**
   * Check if drawing mode is active
   * @returns true if drawing mode is active
   */
  public isInDrawingMode(): boolean {
    return this.isDrawingMode;
  }

  /**
   * Clear the current drawn path
   */
  public clearDrawnPath(): void {
    this.drawnPath = [];

    if (this.drawingContext && this.drawingCanvas) {
      this.drawingContext.clearRect(
        0,
        0,
        this.drawingCanvas.width,
        this.drawingCanvas.height
      );
    }
  }

  /**
   * Create the drawing canvas for freeform shape input
   */
  private createDrawingCanvas(): void {
    // Create canvas element
    this.drawingCanvas = document.createElement('canvas');
    this.drawingCanvas.id = 'drawing-canvas';
    this.drawingCanvas.width = window.innerWidth;
    this.drawingCanvas.height = window.innerHeight;
    this.drawingCanvas.style.position = 'absolute';
    this.drawingCanvas.style.top = '0';
    this.drawingCanvas.style.left = '0';
    this.drawingCanvas.style.pointerEvents = 'auto'; // Always enabled
    this.drawingCanvas.style.zIndex = '10';
    document.body.appendChild(this.drawingCanvas);

    // Get 2D context
    this.drawingContext = this.drawingCanvas.getContext('2d');

    if (this.drawingContext) {
      this.drawingContext.lineWidth = 4;
      this.drawingContext.lineCap = 'round';
      this.drawingContext.lineJoin = 'round';
      this.drawingContext.strokeStyle = '#00ff00';

      // Add a shadow effect for better visibility
      this.drawingContext.shadowColor = 'rgba(0, 255, 0, 0.8)';
      this.drawingContext.shadowBlur = 8;
      this.drawingContext.shadowOffsetX = 0;
      this.drawingContext.shadowOffsetY = 0;
    }

    // Add event listeners for drawing
    window.addEventListener('mousedown', this.handleDrawStart.bind(this));
    window.addEventListener('mousemove', this.handleDrawMove.bind(this));
    window.addEventListener('mouseup', this.handleDrawEnd.bind(this));

    // Touch events for mobile
    window.addEventListener('touchstart', this.handleDrawStart.bind(this));
    window.addEventListener('touchmove', this.handleDrawMove.bind(this));
    window.addEventListener('touchend', this.handleDrawEnd.bind(this));

    // Handle window resize
    window.addEventListener('resize', this.handleCanvasResize.bind(this));
  }

  /**
   * Handle start of drawing (mouse down or touch start)
   */
  private handleDrawStart(event: MouseEvent | TouchEvent): void {
    event.preventDefault();

    this.isDrawing = true;
    this.clearDrawnPath();

    // Get the starting position
    const point = this.getEventPoint(event);
    if (point) {
      this.drawnPath.push(this.normalizePoint(point));

      // Start a new path
      if (this.drawingContext) {
        this.drawingContext.beginPath();
        this.drawingContext.moveTo(point.x, point.y);
      }
    }
  }

  /**
   * Handle drawing motion (mouse move or touch move)
   */
  private handleDrawMove(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) return;

    event.preventDefault();

    const point = this.getEventPoint(event);
    if (point && this.drawingContext) {
      this.drawnPath.push(this.normalizePoint(point));

      // Draw line to new point
      this.drawingContext.lineTo(point.x, point.y);
      this.drawingContext.stroke();
    }
  }

  /**
   * Handle end of drawing (mouse up or touch end)
   */
  private handleDrawEnd(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) return;

    event.preventDefault();

    this.isDrawing = false;

    // End the path
    if (this.drawingContext) {
      this.drawingContext.closePath();
    }

    // If path is too short, clear it
    if (this.drawnPath.length < 3) {
      this.clearDrawnPath();
      return;
    }

    // We don't exit drawing mode anymore, just process the path
    // and clear for the next drawing after a short delay to let the user see their drawing
    setTimeout(() => {
      this.clearDrawnPath();
    }, 500); // Clear after 500ms
  }

  /**
   * Handle canvas resize when window resizes
   */
  private handleCanvasResize(): void {
    if (this.drawingCanvas) {
      // Save current drawing
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = this.drawingCanvas.width;
      tempCanvas.height = this.drawingCanvas.height;
      const tempContext = tempCanvas.getContext('2d');

      if (tempContext && this.drawingCanvas) {
        tempContext.drawImage(this.drawingCanvas, 0, 0);
      }

      // Resize canvas
      this.drawingCanvas.width = window.innerWidth;
      this.drawingCanvas.height = window.innerHeight;

      // Restore drawing
      if (this.drawingContext && this.drawingCanvas) {
        this.drawingContext.lineWidth = 4;
        this.drawingContext.lineCap = 'round';
        this.drawingContext.lineJoin = 'round';
        this.drawingContext.strokeStyle = '#00ff00';

        // Restore shadow effect
        this.drawingContext.shadowColor = 'rgba(0, 255, 0, 0.8)';
        this.drawingContext.shadowBlur = 8;
        this.drawingContext.shadowOffsetX = 0;
        this.drawingContext.shadowOffsetY = 0;

        this.drawingContext.drawImage(tempCanvas, 0, 0);
      }
    }
  }

  /**
   * Get pointer position from mouse or touch event
   */
  private getEventPoint(event: MouseEvent | TouchEvent): Point | null {
    if ('touches' in event) {
      // Touch event
      if (event.touches.length > 0) {
        return {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }
    } else {
      // Mouse event
      return {
        x: event.clientX,
        y: event.clientY,
      };
    }

    return null;
  }

  /**
   * Normalize point from screen coordinates to game world coordinates
   * Center of screen is (0,0) in game world
   */
  private normalizePoint(point: Point): Point {
    if (!this.drawingCanvas) return { x: 0, y: 0 };

    // Convert from screen coordinates to normalized coordinates (-1 to 1)
    const normalizedX = ((point.x / this.drawingCanvas.width) * 2 - 1) * 3; // Scale factor for game world
    const normalizedY = -((point.y / this.drawingCanvas.height) * 2 - 1) * 3; // Invert Y axis

    return {
      x: normalizedX,
      y: normalizedY,
    };
  }

  public displayTrick(trick: any): void {
    const trickDisplay = document.getElementById('trick-display');
    if (trickDisplay && trick) {
      trickDisplay.textContent = `${trick.type} (${trick.rotation}°)`;

      // Animate the trick display
      trickDisplay.style.animation = 'none';
      // Trigger reflow
      void trickDisplay.offsetWidth;
      trickDisplay.style.animation = 'trickPopup 1s ease-out';
    }
  }

  /**
   * Toggle drawing mode on/off
   */
  private toggleDrawingMode(): void {
    this.isDrawingMode = !this.isDrawingMode;
    
    if (this.drawingCanvas) {
      // Update canvas visibility based on drawing mode
      this.drawingCanvas.style.pointerEvents = this.isDrawingMode ? 'auto' : 'none';
      this.drawingCanvas.style.opacity = this.isDrawingMode ? '1' : '0';
    }
    
    // Clear any existing path when toggling
    this.clearDrawnPath();
  }
}
