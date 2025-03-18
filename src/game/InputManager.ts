import * as THREE from 'three';
import nipplejs from 'nipplejs';

export class InputManager {
  private rotationInput: THREE.Vector2;
  private currentShape: string;
  private joystick: any; // nipplejs joystick instance
  private keyState: { [key: string]: boolean };
  private shapeButtons: { [key: string]: HTMLButtonElement };

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

    // Create shape buttons
    this.createShapeButtons();
  }

  private setupKeyboardControls(): void {
    // Set up keyboard listeners
    window.addEventListener('keydown', (event) => {
      this.keyState[event.code] = true;

      // Shape control with keys
      switch (event.code) {
        case 'Digit1':
          this.currentShape = 'straight';
          this.updateButtonUI('straight');
          break;
        case 'Digit2':
          this.currentShape = 'tuck';
          this.updateButtonUI('tuck');
          break;
        case 'Digit3':
          this.currentShape = 'pike';
          this.updateButtonUI('pike');
          break;
        case 'Digit4':
          this.currentShape = 'straddle';
          this.updateButtonUI('straddle');
          break;
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

  private createShapeButtons(): void {
    // Create shape buttons container
    const buttonContainer = document.createElement('div');
    buttonContainer.id = 'shape-buttons';
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.bottom = '100px';
    buttonContainer.style.right = '100px';
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.gap = '10px';
    document.body.appendChild(buttonContainer);

    // Create shape buttons
    const shapes = [
      { id: 'straight', label: 'Straight' },
      { id: 'tuck', label: 'Tuck' },
      { id: 'pike', label: 'Pike' },
      { id: 'straddle', label: 'Straddle' },
    ];

    shapes.forEach((shape) => {
      const button = document.createElement('button');
      button.id = `shape-${shape.id}`;
      button.textContent = shape.label;
      button.style.padding = '10px';
      button.style.borderRadius = '8px';
      button.style.background = shape.id === 'straight' ? '#4CAF50' : '#f0f0f0';
      button.style.border = 'none';
      button.style.cursor = 'pointer';

      button.addEventListener('click', () => {
        this.currentShape = shape.id;
        this.updateButtonUI(shape.id);
      });

      buttonContainer.appendChild(button);
      this.shapeButtons[shape.id] = button;
    });
  }

  private updateButtonUI(activeShape: string): void {
    // Update button styles based on active shape
    Object.keys(this.shapeButtons).forEach((shape) => {
      this.shapeButtons[shape].style.background =
        shape === activeShape ? '#4CAF50' : '#f0f0f0';
    });
  }

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
