import * as THREE from 'three';
import { ShapeSystem, LimbPositions, Point } from '../rendering/ShapeSystem';

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

  // Shape system for freeform control
  private shapeSystem: ShapeSystem;
  private customLimbPositions: LimbPositions | null = null;
  private isUsingCustomShape: boolean = false;

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

    // Initialize shape system
    this.shapeSystem = new ShapeSystem(scene);

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

    // Apply default shape from shape system
    const defaultShape = this.shapeSystem.generateDefaultShape();
    this.shapeSystem.applyLimbPositions(
      this.leftArm,
      this.rightArm,
      this.leftLeg,
      this.rightLeg,
      defaultShape
    );
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

    // Update group position and rotation
    this.group.position.copy(this.position);
    this.group.rotation.copy(this.rotation);
  }

  /**
   * Apply a custom shape based on a drawn path
   * @param drawnPath Array of points from user drawing
   * @returns boolean indicating if the shape was successfully applied
   */
  public applyCustomShape(drawnPath: Point[]): boolean {
    console.log("Character received drawn path with length:", drawnPath.length);
    
    // Process the drawn shape using ShapeSystem
    const limbPositions = this.shapeSystem.processDrawnShape(drawnPath);

    if (limbPositions) {
      console.log("Processed limb positions - applying to character");
      
      // Store the custom limb positions
      this.customLimbPositions = limbPositions;
      this.isUsingCustomShape = true;

      // Apply limb positions to character
      this.shapeSystem.applyLimbPositions(
        this.leftArm,
        this.rightArm,
        this.leftLeg,
        this.rightLeg,
        limbPositions
      );

      // Set current shape to "custom"
      this.currentShape = 'custom';
      
      return true; // Successfully applied
    }
    
    console.log("Failed to process drawn path to limb positions");
    return false; // Failed to apply
  }

  /**
   * Reset to a default shape
   */
  public resetToDefaultShape(): void {
    this.isUsingCustomShape = false;
    this.customLimbPositions = null;
    this.shapeSystem.clearDrawnPath();

    // Apply default shape from shape system
    const defaultShape = this.shapeSystem.generateDefaultShape();
    this.shapeSystem.applyLimbPositions(
      this.leftArm,
      this.rightArm,
      this.leftLeg,
      this.rightLeg,
      defaultShape
    );

    this.currentShape = 'straight';
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

        case 'custom':
          trickType = 'custom flip';
          difficultyMultiplier = 2.0; // Custom shapes are more difficult
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
        difficultyMultiplier: this.currentShape === 'custom' ? 1.0 : 0.5,
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

  /**
   * Show the torso visual guide for drawing
   */
  public showTorsoVisual(): void {
    this.shapeSystem.showTorsoVisual();
  }

  /**
   * Hide the torso visual guide
   */
  public hideTorsoVisual(): void {
    this.shapeSystem.hideTorsoVisual();
  }
}
