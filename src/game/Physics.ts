import * as THREE from 'three';
import { Character } from '../entities/Character';
import { Trampoline } from '../entities/Trampoline';

// Physics constants
const GRAVITY = 9.8;
const MAX_BOUNCE_FORCE = 15;
const BASE_BOUNCE_FORCE = 8;
const ROTATION_INFLUENCE = 0.2; // How much rotation affects landing quality

export class Physics {
  private gravity: number;

  constructor() {
    this.gravity = GRAVITY;
    // Physics initialization complete
  }

  public update(_deltaTime: number): void {
    // This is called each frame to update physics
    // Most physics is handled directly in the Character class
  }

  public checkCollision(character: Character, trampoline: Trampoline): boolean {
    // Get positions
    const characterPosition = character.getPosition();
    const trampolinePosition = trampoline.getPosition();
    const trampolineRadius = trampoline.getRadius();

    // Check if character's belly button (center of mass) is within trampoline boundaries
    // Only check for collision when character is falling down
    if (character.getVelocity().y < 0) {
      // Calculate horizontal distance to trampoline center
      const dx = characterPosition.x - trampolinePosition.x;
      const dz = characterPosition.z - trampolinePosition.z;
      const horizontalDistance = Math.sqrt(dx * dx + dz * dz);

      // Check if character is within trampoline radius
      if (horizontalDistance < trampolineRadius) {
        // Check if character's y-position is close to trampoline
        if (Math.abs(characterPosition.y - trampolinePosition.y) < 0.5) {
          // Compress the trampoline on collision
          const compressionAmount = Math.min(
            0.5,
            Math.abs(character.getVelocity().y) / 20
          );
          trampoline.compress(compressionAmount);
          return true;
        }
      }
    }

    return false;
  }

  public calculateLandingQuality(character: Character): number {
    // Calculate landing quality based on body orientation
    // 1.0 is perfect landing (feet down), 0.0 is worst (head down)

    // Get character's rotation
    const rotation = character.getRotation();

    // Check if character is upright (feet down)
    // This is simplified - in a complete implementation, we'd check the body posture

    // Convert rotation to be between 0 and 1, where 1 is feet down
    // This is a simplification - we're just using the current rotation around the z-axis
    let feetDownness = Math.abs(Math.cos(rotation.z));

    // Apply rotation penalty
    const rotationPenalty = character.getRotationSpeed() * ROTATION_INFLUENCE;
    feetDownness = Math.max(0.1, feetDownness - rotationPenalty);

    return feetDownness;
  }

  public calculateBounceForce(landingQuality: number): number {
    // Calculate bounce force based on landing quality
    // Higher landing quality = higher bounce
    const bounceForce =
      BASE_BOUNCE_FORCE +
      (MAX_BOUNCE_FORCE - BASE_BOUNCE_FORCE) * landingQuality;

    return bounceForce;
  }

  // Helper methods
  public applyGravity(velocity: THREE.Vector3, deltaTime: number): void {
    velocity.y -= this.gravity * deltaTime;
  }

  public getGravity(): number {
    return this.gravity;
  }
}
