import * as THREE from 'three';

export class Environment {
  private scene: THREE.Scene;
  private ground: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    this.scene = scene;

    // Create ground
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0x4caf50,
      roughness: 0.8,
      metalness: 0.2,
    });

    this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
    this.ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal
    this.ground.position.y = -2; // Position below the trampoline
    this.ground.receiveShadow = true;

    this.scene.add(this.ground);

    // Add distant surroundings (background mountains)
    this.addSurroundings();

    // Environment initialization complete
  }

  private addSurroundings(): void {
    // Create some distant hills/mountains
    const mountainGeometry = new THREE.ConeGeometry(5, 10, 4);
    const mountainMaterial = new THREE.MeshStandardMaterial({
      color: 0x6a8ebf,
      roughness: 1,
      metalness: 0,
    });

    // Add several mountains in the background
    const mountainPositions = [
      { x: -20, z: -20 },
      { x: -15, z: -25 },
      { x: -5, z: -22 },
      { x: 10, z: -18 },
      { x: 20, z: -23 },
    ];

    mountainPositions.forEach((pos) => {
      const mountain = new THREE.Mesh(mountainGeometry, mountainMaterial);
      mountain.position.set(pos.x, 3, pos.z);
      mountain.castShadow = true;
      mountain.receiveShadow = true;
      this.scene.add(mountain);
    });
  }
}
