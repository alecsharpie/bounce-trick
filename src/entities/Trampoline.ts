import * as THREE from 'three';

export class Trampoline {
  private scene: THREE.Scene;
  private frame: THREE.Group;
  private mat: THREE.Mesh;
  private springs: THREE.Mesh[];
  private animationTime: number = 0;
  private isCompressed: boolean = false;
  private compressionAmount: number = 0;
  private restPosition: number = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.springs = [];

    // Create trampoline group
    this.frame = new THREE.Group();
    this.frame.position.y = 0;
    this.scene.add(this.frame);

    // Create trampoline frame
    this.createFrame();

    // Create trampoline mat
    this.mat = this.createMat();
    this.frame.add(this.mat);

    // Create springs
    this.createSprings();

    // Trampoline initialization complete
  }

  private createFrame(): void {
    const frameGeometry = new THREE.TorusGeometry(3, 0.2, 16, 32);
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.5,
      metalness: 0.7,
    });

    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.rotation.x = Math.PI / 2; // Make it horizontal
    frame.position.y = 0;
    frame.castShadow = true;
    frame.receiveShadow = true;

    this.frame.add(frame);

    // Add frame legs
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
    const legMaterial = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.5,
      metalness: 0.7,
    });

    const legPositions = [
      { x: 2.5, z: 0 },
      { x: -2.5, z: 0 },
      { x: 0, z: 2.5 },
      { x: 0, z: -2.5 },
    ];

    legPositions.forEach((pos) => {
      const leg = new THREE.Mesh(legGeometry, legMaterial);
      leg.position.set(pos.x, -1, pos.z);
      leg.castShadow = true;
      this.frame.add(leg);
    });
  }

  private createMat(): THREE.Mesh {
    const matGeometry = new THREE.CircleGeometry(2.8, 32);
    const matMaterial = new THREE.MeshStandardMaterial({
      color: 0x2196f3,
      roughness: 0.5,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    const mat = new THREE.Mesh(matGeometry, matMaterial);
    mat.rotation.x = Math.PI / 2; // Make it horizontal
    mat.position.y = 0;
    mat.castShadow = true;
    mat.receiveShadow = true;

    this.restPosition = mat.position.y;

    return mat;
  }

  private createSprings(): void {
    const springGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 8);
    const springMaterial = new THREE.MeshStandardMaterial({
      color: 0xcccccc,
      roughness: 0.5,
      metalness: 0.8,
    });

    // Create springs around the perimeter
    const numSprings = 16;
    const radius = 2.8;

    for (let i = 0; i < numSprings; i++) {
      const angle = (i / numSprings) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const spring = new THREE.Mesh(springGeometry, springMaterial);
      spring.position.set(x, 0, z);
      spring.rotation.x = Math.PI / 2; // Make it connect the mat and frame

      this.springs.push(spring);
      this.frame.add(spring);
    }
  }

  public update(deltaTime: number): void {
    // Update animation time
    this.animationTime += deltaTime;

    // If the trampoline is compressed, animate it back to rest position
    if (this.isCompressed) {
      // Spring back to original position
      const damping = 0.9;

      // Spring back with damping
      this.compressionAmount *= damping;
      this.mat.position.y = this.restPosition - this.compressionAmount;

      // Update spring positions
      this.updateSprings();

      // If compression is very small, reset to rest position
      if (Math.abs(this.compressionAmount) < 0.01) {
        this.isCompressed = false;
        this.compressionAmount = 0;
        this.mat.position.y = this.restPosition;
        this.updateSprings();
      }
    }
  }

  private updateSprings(): void {
    // Update spring positions based on mat position
    this.springs.forEach((spring) => {
      spring.scale.y = 1 - this.compressionAmount;
    });
  }

  public compress(amount: number): void {
    this.isCompressed = true;
    this.compressionAmount = amount;
    this.mat.position.y = this.restPosition - amount;
    this.updateSprings();
  }

  public getPosition(): THREE.Vector3 {
    return this.mat.position.clone();
  }

  public getRadius(): number {
    return 2.8; // Radius of the mat
  }
}
