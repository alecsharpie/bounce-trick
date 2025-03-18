import { Physics } from '../../src/game/Physics';

describe('Physics', () => {
  let physics: Physics;

  beforeEach(() => {
    physics = new Physics();
  });

  test('should calculate correct bounce force', () => {
    const landingQuality = 1.0; // Perfect landing
    const force = physics.calculateBounceForce(landingQuality);
    expect(force).toBeGreaterThan(0);
  });
});