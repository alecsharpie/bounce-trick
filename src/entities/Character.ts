import * as THREE from 'three';

// Define trick types
export interface Trick {
  type: string;
  rotation: number;
  shape?: string;
  difficultyMultiplier: number;
}

export class Character {
  private scene: THREE.Scene;
  private group: THREE.Group;
  private body: THREE.Group;
  private head!: THREE.Mesh;
  private torso!: THREE.Mesh;
  private leftArm!: THREE.Group;
  private rightArm!: THREE.Group;
  private leftLeg!: THREE.Group;
  private rightLeg!: THREE.Group;

  // Physics properties
  private position: THREE.Vector3;
  private velocity: THREE.Vector3;
  private rotation: THREE.Euler;
  private rotationSpeed: number;
  // Used for future features
  private readonly targetRotation: THREE.Euler;
  private currentShape: string;
  private lastRotation: number;
  private rotationTotal: number;
  private isInAir: boolean;
  private currentTrick: Trick | null;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Initialize character group
    this.group = new THREE.Group();
    this.position = new THREE.Vector3(0, 5, 0);
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.rotation = new THREE.Euler(0, 0, 0);
    this.rotationSpeed = 0;
    this.targetRotation = new THREE.Euler(0, 0, 0);
    this.currentShape = 'straight';
    this.lastRotation = 0;
    this.rotationTotal = 0;
    this.isInAir = true;
    this.currentTrick = null;

    // Body group
    this.body = new THREE.Group();
    this.group.add(this.body);

    // Create body parts
    this.createBody();

    // Position the character
    this.group.position.copy(this.position);

    // Add character to scene
    this.scene.add(this.group);

    // Character initialization complete
  }

  private createBody(): void {
    // Create head
    const headGeometry = new THREE.SphereGeometry(0.3, 32, 32);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd700,
      roughness: 0.7,
      metalness: 0.1,
    });

    this.head = new THREE.Mesh(headGeometry, headMaterial);
    this.head.position.y = 1.7;
    this.head.castShadow = true;
    this.body.add(this.head);

    // Create torso
    const torsoGeometry = new THREE.CylinderGeometry(0.3, 0.4, 1.0, 8);
    const torsoMaterial = new THREE.MeshStandardMaterial({
      color: 0xff5722,
      roughness: 0.7,
      metalness: 0.1,
    });

    this.torso = new THREE.Mesh(torsoGeometry, torsoMaterial);
    this.torso.position.y = 1.0;
    this.torso.castShadow = true;
    this.body.add(this.torso);

    // Create arms
    this.leftArm = this.createLimb(0.15, 0.8, 0x3f51b5);
    this.leftArm.position.set(0.4, 1.4, 0);
    this.body.add(this.leftArm);

    this.rightArm = this.createLimb(0.15, 0.8, 0x3f51b5);
    this.rightArm.position.set(-0.4, 1.4, 0);
    this.body.add(this.rightArm);

    // Create legs
    this.leftLeg = this.createLimb(0.2, 0.9, 0x4caf50);
    this.leftLeg.position.set(0.2, 0.5, 0);
    this.body.add(this.leftLeg);

    this.rightLeg = this.createLimb(0.2, 0.9, 0x4caf50);
    this.rightLeg.position.set(-0.2, 0.5, 0);
    this.body.add(this.rightLeg);

    // Default pose - straight
    this.applyShape('straight');
  }

  private createLimb(
    radius: number,
    length: number,
    color: number
  ): THREE.Group {
    const limb = new THREE.Group();

    const limbGeometry = new THREE.CylinderGeometry(radius, radius, length, 8);
    const limbMaterial = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.1,
    });

    const mesh = new THREE.Mesh(limbGeometry, limbMaterial);
    mesh.position.y = -length / 2;
    mesh.castShadow = true;

    limb.add(mesh);
    return limb;
  }

  public update(
    deltaTime: number,
    rotationInput: THREE.Vector2,
    shapeInput: string
  ): void {
    // Apply gravity
    this.velocity.y -= 9.8 * deltaTime;

    // Update position based on velocity
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.position.z += this.velocity.z * deltaTime;

    // Ground collision (in case character misses trampoline)
    if (this.position.y < 0) {
      this.position.y = 0;
      this.velocity.y = 0;
      this.isInAir = false;
    } else {
      this.isInAir = true;
    }

    // Update rotation based on input
    if (this.isInAir) {
      // Update rotation speed based on input
      const rotationFactor = 5; // Adjust for faster rotation
      this.rotationSpeed = rotationInput.x * rotationFactor;

      // Apply rotation
      this.rotation.z += this.rotationSpeed * deltaTime;

      // Track rotation for tricks
      const rotationChange = this.rotation.z - this.lastRotation;
      this.rotationTotal += Math.abs(rotationChange);
      this.lastRotation = this.rotation.z;

      // Detect tricks
      this.detectTrick();
    } else {
      // Reset rotation when on ground
      this.rotationSpeed = 0;
      this.rotationTotal = 0;
    }

    // Apply shape if provided
    if (shapeInput && shapeInput !== this.currentShape) {
      this.applyShape(shapeInput);
    }

    // Update group position and rotation
    this.group.position.copy(this.position);
    this.group.rotation.copy(this.rotation);
  }

  private applyShape(shape: string): void {
    this.currentShape = shape;

    // Reset limbs
    this.leftArm.rotation.set(0, 0, 0);
    this.rightArm.rotation.set(0, 0, 0);
    this.leftLeg.rotation.set(0, 0, 0);
    this.rightLeg.rotation.set(0, 0, 0);

    switch (shape) {
      case 'straight':
        // Default pose - arms down, legs straight
        this.leftArm.rotation.z = -Math.PI / 8;
        this.rightArm.rotation.z = Math.PI / 8;
        break;

      case 'tuck':
        // Tuck position - arms forward, knees up
        this.leftArm.rotation.z = -Math.PI / 2;
        this.rightArm.rotation.z = Math.PI / 2;
        this.leftLeg.rotation.x = Math.PI / 2;
        this.rightLeg.rotation.x = Math.PI / 2;
        break;

      case 'pike':
        // Pike position - touch toes
        this.leftArm.rotation.x = -Math.PI / 2;
        this.rightArm.rotation.x = -Math.PI / 2;
        this.leftLeg.rotation.x = -Math.PI / 6;
        this.rightLeg.rotation.x = -Math.PI / 6;
        break;

      case 'straddle':
        // Straddle position - legs apart
        this.leftArm.rotation.z = -Math.PI / 2;
        this.rightArm.rotation.z = Math.PI / 2;
        this.leftLeg.rotation.z = -Math.PI / 3;
        this.rightLeg.rotation.z = Math.PI / 3;
        break;
    }
  }

  private detectTrick(): void {
    // Define rotation thresholds for tricks
    const FLIP_THRESHOLD = Math.PI * 2; // 360 degrees
    const HALF_FLIP_THRESHOLD = Math.PI; // 180 degrees

    // Detect trick based on total rotation
    if (this.rotationTotal >= FLIP_THRESHOLD) {
      // Detect the type of flip based on shape
      let trickType = 'flip';
      let difficultyMultiplier = 1.0;

      switch (this.currentShape) {
        case 'tuck':
          trickType = 'tuck flip';
          difficultyMultiplier = 1.2;
          break;

        case 'pike':
          trickType = 'pike flip';
          difficultyMultiplier = 1.5;
          break;

        case 'straddle':
          trickType = 'straddle flip';
          difficultyMultiplier = 1.8;
          break;
      }

      // Set current trick
      this.currentTrick = {
        type: trickType,
        rotation: Math.floor(this.rotationTotal / (Math.PI * 2)) * 360,
        shape: this.currentShape,
        difficultyMultiplier: difficultyMultiplier,
      };

      // Reset rotation tracking
      this.rotationTotal = 0;
    } else if (this.rotationTotal >= HALF_FLIP_THRESHOLD) {
      // Half flip
      this.currentTrick = {
        type: 'half flip',
        rotation: 180,
        shape: this.currentShape,
        difficultyMultiplier: 0.5,
      };
    }
  }

  public bounce(force: number): void {
    // Apply bounce force
    this.velocity.y = force;

    // Reset rotation tracking for next jump
    this.rotationTotal = 0;
    this.currentTrick = null;
  }

  public getCurrentTrick(): Trick | null {
    return this.currentTrick;
  }

  // Getters for physics properties
  public getPosition(): THREE.Vector3 {
    return this.position.clone();
  }

  public getVelocity(): THREE.Vector3 {
    return this.velocity.clone();
  }

  public getRotation(): THREE.Euler {
    return this.rotation.clone();
  }

  public getRotationSpeed(): number {
    return this.rotationSpeed;
  }
}
