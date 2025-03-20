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
        // Force drawing mode to be active when pressing D
        // This ensures the drawing mode is always toggled correctly
        this.isDrawingMode = false; // Reset first to ensure toggle works
        this.toggleDrawingMode();
        console.log("Drawing mode toggled:", this.isDrawingMode);
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
    
    // IMPORTANT: Set initial opacity to 1 so it's visible from the start
    this.drawingCanvas.style.opacity = '1';
    
    document.body.appendChild(this.drawingCanvas);

    // Get 2D context with improved drawing settings
    this.drawingContext = this.drawingCanvas.getContext('2d', {
      alpha: true
    });

    if (this.drawingContext) {
      // Improved line style for better drawing experience - MUCH brighter line
      this.drawingContext.lineWidth = 8; // Even thicker line for better visibility
      this.drawingContext.lineCap = 'round';
      this.drawingContext.lineJoin = 'round';
      this.drawingContext.strokeStyle = 'rgb(0, 255, 100)'; // Fully opaque bright green
      
      // Enhanced shadow effect for more sparkle
      this.drawingContext.shadowColor = 'rgb(100, 255, 150)';
      this.drawingContext.shadowBlur = 15;
      this.drawingContext.shadowOffsetX = 0;
      this.drawingContext.shadowOffsetY = 0;
      
      console.log("Drawing canvas initialized with bright green line");
    }

    // Add drawing guide instructions
    this.addDrawingGuideText();

    // Add event listeners for drawing
    this.drawingCanvas.addEventListener('mousedown', this.handleDrawStart.bind(this));
    window.addEventListener('mousemove', this.handleDrawMove.bind(this));
    window.addEventListener('mouseup', this.handleDrawEnd.bind(this));

    // Touch events for mobile with passive: false for better performance
    this.drawingCanvas.addEventListener('touchstart', this.handleDrawStart.bind(this), { passive: false });
    window.addEventListener('touchmove', this.handleDrawMove.bind(this), { passive: false });
    window.addEventListener('touchend', this.handleDrawEnd.bind(this));

    // Handle window resize
    window.addEventListener('resize', this.handleCanvasResize.bind(this));
  }
  
  /**
   * Add text guide to help users understand how to draw
   */
  private addDrawingGuideText(): void {
    if (!this.drawingContext || !this.drawingCanvas) return;
    
    this.drawingContext.save();
    
    // Main title
    const mainText = "Draw a shape for the character's limbs";
    
    this.drawingContext.font = 'bold 26px Arial, sans-serif';
    this.drawingContext.textAlign = 'center';
    this.drawingContext.fillStyle = 'rgba(255, 255, 255, 0.9)';
    this.drawingContext.shadowColor = 'rgba(0, 0, 0, 0.8)';
    this.drawingContext.shadowBlur = 5;
    
    // Position the text at the top of the canvas
    const x = this.drawingCanvas.width / 2;
    const y = 50;
    
    this.drawingContext.fillText(mainText, x, y);
    
    // Add more detailed instructions
    this.drawingContext.font = 'normal 18px Arial, sans-serif';
    this.drawingContext.fillStyle = 'rgba(230, 230, 230, 0.9)';
    
    const instructions = [
      "1. Draw a continuous line from TOP to BOTTOM",
      "2. Top half becomes arms, bottom half becomes legs",
      "3. Press D key to toggle drawing mode"
    ];
    
    // Draw each instruction line
    instructions.forEach((text, i) => {
      this.drawingContext!.fillText(text, x, y + 30 + (i * 25));
    });
    
    this.drawingContext.restore();
  }

  /**
   * Handle start of drawing (mouse down or touch start)
   */
  private handleDrawStart(event: MouseEvent | TouchEvent): void {
    event.preventDefault();

    console.log("Drawing started");
    this.isDrawing = true;
    this.clearDrawnPath();

    // Get the starting position
    const point = this.getEventPoint(event);
    if (point) {
      const normalized = this.normalizePoint(point);
      this.drawnPath.push(normalized);
      console.log(`First point: (${normalized.x}, ${normalized.y})`);

      // Start a new path with enhanced visuals
      if (this.drawingContext) {
        // Clear any previous drawings first
        this.drawingContext.clearRect(0, 0, this.drawingCanvas!.width, this.drawingCanvas!.height);
        
        // Redraw the instructions and torso visual
        this.addDrawingGuideText();
        this.drawTorsoTargetGuide();
        
        // Start a bright sparkly path
        this.drawingContext.beginPath();
        this.drawingContext.moveTo(point.x, point.y);
        
        // Draw a starting circle for better visual feedback
        this.drawingContext.beginPath();
        this.drawingContext.arc(point.x, point.y, 8, 0, Math.PI * 2);
        this.drawingContext.fillStyle = 'rgba(0, 255, 100, 0.7)';
        this.drawingContext.fill();
        
        // Return to line drawing
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
      // Skip points that are too close to prevent over-sampling
      const lastPoint = this.drawnPath.length > 0 ? this.drawnPath[this.drawnPath.length - 1] : null;
      const normalized = this.normalizePoint(point);
      
      // Only add points if they're sufficiently far from the previous point
      // Use a very small threshold to get more detail
      if (!lastPoint || 
          Math.sqrt(Math.pow(normalized.x - lastPoint.x, 2) + 
                   Math.pow(normalized.y - lastPoint.y, 2)) > 0.01) {
        
        // Add to the path for processing later
        this.drawnPath.push(normalized);
  
        // Create a sparkly drawing effect
        // First, draw the main line
        this.drawingContext.lineTo(point.x, point.y);
        this.drawingContext.stroke();
        
        // Then add a small circle at this point for a more pronounced effect
        this.drawingContext.beginPath();
        this.drawingContext.arc(point.x, point.y, 3, 0, Math.PI * 2);
        this.drawingContext.fillStyle = 'rgba(100, 255, 150, 0.5)';
        this.drawingContext.fill();
        
        // Then continue the line
        this.drawingContext.beginPath();
        this.drawingContext.moveTo(point.x, point.y);
      }
    }
  }

  /**
   * Handle end of drawing (mouse up or touch end)
   */
  private handleDrawEnd(event: MouseEvent | TouchEvent): void {
    if (!this.isDrawing) return;

    event.preventDefault();

    this.isDrawing = false;
    console.log("Drawing ended with path length:", this.drawnPath.length);

    // End the path
    if (this.drawingContext) {
      this.drawingContext.closePath();
    }

    // If path is too short, clear it and show a message
    if (this.drawnPath.length < 3) {
      console.log("Path too short, clearing");
      this.clearDrawnPath();
      this.showDrawingFeedback("Draw a longer line!");
      return;
    }
    
    // Make sure we have enough points for a good shape
    if (this.drawnPath.length < 5) {
      // Add more points by interpolating between existing points
      const enrichedPath = this.enrichDrawnPath(this.drawnPath);
      console.log("Enriched path from", this.drawnPath.length, "to", enrichedPath.length, "points");
      this.drawnPath = enrichedPath;
    }
    
    // THIS IS THE KEY CHANGE: Apply the drawn path to the character now
    // Get a reference to the character from the game instance
    const game = this.getGameInstance();
    if (game && game.character) {
      console.log("Applying finished drawing to character");
      
      // Create a deep copy of the path to avoid any reference issues
      const pathCopy = this.drawnPath.map(p => ({...p}));
      
      // Apply the custom shape
      const success = game.character.applyCustomShape(pathCopy);
      
      if (success) {
        console.log("Successfully applied custom shape");
        // Show feedback to user
        this.showDrawingFeedback("Shape applied!");
      } else {
        console.log("Failed to apply custom shape");
        this.showDrawingFeedback("Draw a clearer shape!");
      }
    } else {
      console.log("Could not find game or character instance");
      this.showDrawingFeedback("Shape drawn!");
    }
    
    // Keep drawing visible for a moment so user can see what they drew
    setTimeout(() => {
      this.clearDrawnPath();
    }, 1000);
  }
  
  /**
   * Get a reference to the Game instance from the window
   */
  private getGameInstance() {
    // Try to get the game instance from window 
    // This is a bit of a hack but necessary for direct communication
    return (window as any).__gameInstance;
  }
  
  /**
   * Add more points to a sparse path by interpolating between existing points
   */
  private enrichDrawnPath(path: Point[]): Point[] {
    if (path.length < 2) return path;
    
    const result: Point[] = [];
    
    // Add the first point
    result.push(path[0]);
    
    // Add interpolated points between each pair of original points
    for (let i = 0; i < path.length - 1; i++) {
      const p1 = path[i];
      const p2 = path[i + 1];
      
      // Add 3 interpolated points between each pair
      for (let j = 1; j <= 3; j++) {
        const t = j / 4;
        result.push({
          x: p1.x + (p2.x - p1.x) * t,
          y: p1.y + (p2.y - p1.y) * t
        });
      }
      
      // Add the next original point
      result.push(p2);
    }
    
    return result;
  }
  
  /**
   * Show feedback message on the drawing canvas
   */
  private showDrawingFeedback(message: string): void {
    if (!this.drawingContext || !this.drawingCanvas) return;
    
    // Save current context state
    this.drawingContext.save();
    
    // Add a semi-transparent overlay
    this.drawingContext.fillStyle = 'rgba(0, 0, 0, 0.2)';
    this.drawingContext.fillRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height);
    
    // Draw message text
    const x = this.drawingCanvas.width / 2;
    const y = this.drawingCanvas.height / 2;
    
    this.drawingContext.font = 'bold 32px Arial, sans-serif';
    this.drawingContext.textAlign = 'center';
    this.drawingContext.textBaseline = 'middle';
    this.drawingContext.fillStyle = 'rgba(0, 255, 100, 0.9)';
    this.drawingContext.shadowColor = 'black';
    this.drawingContext.shadowBlur = 8;
    
    this.drawingContext.fillText(message, x, y);
    
    // Restore context state
    this.drawingContext.restore();
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
    // Force drawing mode to be on always
    this.isDrawingMode = true;
    console.log("Drawing mode is now always ON for testing");
    
    if (this.drawingCanvas) {
      // Always ensure canvas is visible and interactive
      this.drawingCanvas.style.pointerEvents = 'auto';
      this.drawingCanvas.style.opacity = '1';
      
      // Refresh the drawing canvas
      if (this.drawingContext) {
        // Clear any existing paths
        this.clearDrawnPath();
        
        // Redraw the guide text
        this.addDrawingGuideText();
        
        // Add a torso target guide to help users understand where to draw
        this.drawTorsoTargetGuide();
        
        // Add a message to confirm drawing is enabled
        this.showDrawingFeedback("Drawing Mode ON - Draw a shape!");
      }
    }
  }
  
  /**
   * Draw a visual guide showing the torso target area
   */
  private drawTorsoTargetGuide(): void {
    if (!this.drawingContext || !this.drawingCanvas) return;
    
    // Draw a circular guide where the torso is located
    // This helps users understand where to draw in relation to the character
    
    // Convert torso world position to screen coordinates
    const torsoX = this.drawingCanvas.width / 2;
    const torsoY = this.drawingCanvas.height / 2;
    const radius = 60; // Size of the guide circle in pixels
    
    // Save current context state
    this.drawingContext.save();
    
    // Draw dashed circle
    this.drawingContext.beginPath();
    this.drawingContext.setLineDash([5, 5]); // Dashed line pattern
    this.drawingContext.arc(torsoX, torsoY, radius, 0, Math.PI * 2);
    this.drawingContext.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    this.drawingContext.lineWidth = 2;
    this.drawingContext.stroke();
    
    // Add label
    this.drawingContext.font = '14px Arial, sans-serif';
    this.drawingContext.textAlign = 'center';
    this.drawingContext.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.drawingContext.fillText('Torso', torsoX, torsoY + radius + 20);
    
    // Restore context state
    this.drawingContext.restore();
  }
}
