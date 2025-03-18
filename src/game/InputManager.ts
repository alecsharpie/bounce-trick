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

    // Create drawing mode toggle button
    this.createDrawingModeButton();
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
    this.drawingCanvas.style.pointerEvents = 'none'; // Initially disabled
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
   * Create a button to toggle drawing mode
   */
  private createDrawingModeButton(): void {
    const drawingModeBtn = document.createElement('button');
    drawingModeBtn.id = 'drawing-mode-btn';
    drawingModeBtn.textContent = 'Draw Body Shape';
    drawingModeBtn.style.position = 'absolute';
    drawingModeBtn.style.top = '20px';
    drawingModeBtn.style.left = '20px';
    drawingModeBtn.style.padding = '10px';
    drawingModeBtn.style.borderRadius = '8px';
    drawingModeBtn.style.background = '#f0f0f0';
    drawingModeBtn.style.border = 'none';
    drawingModeBtn.style.cursor = 'pointer';
    drawingModeBtn.style.zIndex = '20';
    drawingModeBtn.style.fontWeight = 'bold';
    drawingModeBtn.style.color = '#333';

    drawingModeBtn.addEventListener('click', () => {
      this.toggleDrawingMode();
    });

    document.body.appendChild(drawingModeBtn);
  }

  /**
   * Toggle drawing mode on/off
   */
  private toggleDrawingMode(): void {
    this.isDrawingMode = !this.isDrawingMode;

    // Update button appearance
    const drawingModeBtn = document.getElementById('drawing-mode-btn');
    if (drawingModeBtn) {
      drawingModeBtn.style.background = this.isDrawingMode
        ? '#4CAF50'
        : '#f0f0f0';
      drawingModeBtn.textContent = this.isDrawingMode
        ? 'Cancel Drawing'
        : 'Draw Body Shape';
    }

    // Enable/disable the canvas pointer events
    if (this.drawingCanvas) {
      this.drawingCanvas.style.pointerEvents = this.isDrawingMode
        ? 'auto'
        : 'none';
    }

    // Clear any existing path
    this.clearDrawnPath();

    // Disable joystick when in drawing mode
    const joystickContainer = document.getElementById('joystick-container');

    if (joystickContainer) {
      joystickContainer.style.pointerEvents = this.isDrawingMode
        ? 'none'
        : 'auto';
      joystickContainer.style.opacity = this.isDrawingMode ? '0.5' : '1';
    }

    // Show instructions when in drawing mode
    this.showDrawingInstructions(this.isDrawingMode);
  }

  /**
   * Show drawing instructions
   */
  private showDrawingInstructions(show: boolean): void {
    let instructionsEl = document.getElementById('drawing-instructions');

    if (show) {
      if (!instructionsEl) {
        instructionsEl = document.createElement('div');
        instructionsEl.id = 'drawing-instructions';
        instructionsEl.style.position = 'absolute';
        instructionsEl.style.top = '70px';
        instructionsEl.style.left = '20px';
        instructionsEl.style.padding = '10px';
        instructionsEl.style.backgroundColor = 'rgba(0,0,0,0.7)';
        instructionsEl.style.color = 'white';
        instructionsEl.style.borderRadius = '8px';
        instructionsEl.style.maxWidth = '350px';
        instructionsEl.style.zIndex = '25';
        instructionsEl.innerHTML = `
          <strong>Drawing Instructions:</strong>
          <ul style="padding-left: 20px; margin: 5px 0;">
            <li>Draw a line that passes through the torso</li>
            <li>The line will be mirrored for the right side</li>
            <li>The line defines arms and legs position</li>
            <li>Spin using the joystick for tricks</li>
          </ul>
        `;
        document.body.appendChild(instructionsEl);
      } else {
        instructionsEl.style.display = 'block';
      }
    } else if (instructionsEl) {
      instructionsEl.style.display = 'none';
    }
  }

  /**
   * Handle start of drawing (mouse down or touch start)
   */
  private handleDrawStart(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawingMode) return;

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
    if (!this.isDrawingMode || !this.isDrawing) return;

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
    if (!this.isDrawingMode || !this.isDrawing) return;

    event.preventDefault();

    this.isDrawing = false;

    // End the path
    if (this.drawingContext) {
      this.drawingContext.closePath();
    }

    // If path is too short, clear it
    if (this.drawnPath.length < 3) {
      this.clearDrawnPath();
    }

    // Exit drawing mode
    this.toggleDrawingMode();
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
}
