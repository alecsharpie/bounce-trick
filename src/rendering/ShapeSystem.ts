import * as THREE from 'three';

/**
 * Point interface for 2D positions
 */
export interface Point {
  x: number;
  y: number;
}

/**
 * LimbPositions interface for storing limb control points
 */
export interface LimbPositions {
  leftArmLegPath: Point[]; // Left side of the body (both arm and leg)
  rightArmLegPath: Point[]; // Right side of the body (both arm and leg)
}

/**
 * ShapeSystem for freeform line drawing to control limb positions
 */
export class ShapeSystem {
  private scene: THREE.Scene;
  private drawnPath: Point[] = [];
  private pathLine?: THREE.Line;
  private mirroredPathLine?: THREE.Line;
  private torsoVisual?: THREE.Mesh;
  private limbLines: THREE.Group;
  private readonly torsoCenter: Point = { x: 0, y: 1.0 }; // Center at torso position
  private readonly torsoRadius: number = 0.4; // Match torso radius in Character.ts
  private readonly TOLERANCE: number = 0.1; // Simplification tolerance
  private readonly shoulderPosition: Point = { x: 0.4, y: 1.4 }; // Left shoulder position
  private readonly hipPosition: Point = { x: 0.2, y: 0.5 }; // Left hip position

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.limbLines = new THREE.Group();
    this.scene.add(this.limbLines);
    this.createTorsoVisual();
  }

  /**
   * Create a visual representation of the torso to help with drawing
   */
  private createTorsoVisual(): void {
    // Create a circular outline to represent torso target for drawing
    const geometry = new THREE.RingGeometry(
      this.torsoRadius - 0.02,
      this.torsoRadius,
      32
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
      depthTest: false,
    });

    this.torsoVisual = new THREE.Mesh(geometry, material);
    this.torsoVisual.position.set(0, this.torsoCenter.y, 0.05);
    this.torsoVisual.rotation.x = Math.PI / 2;
    this.scene.add(this.torsoVisual);
  }

  /**
   * Hide torso visual guide
   */
  public hideTorsoVisual(): void {
    if (this.torsoVisual) {
      this.torsoVisual.visible = false;
    }
  }

  /**
   * Show torso visual guide
   */
  public showTorsoVisual(): void {
    if (this.torsoVisual) {
      this.torsoVisual.visible = true;
    }
  }

  /**
   * Process a drawn path to create limb positions
   * @param drawnPath Array of points from user drawing
   * @returns LimbPositions object or null if path is invalid
   */
  public processDrawnShape(drawnPath: Point[]): LimbPositions | null {
    this.drawnPath = drawnPath;

    // Simplify the drawn path using Ramer-Douglas-Peucker algorithm
    const simplifiedPath = this.simplifyPath(drawnPath, this.TOLERANCE);

    // Validate the path passes through torso area
    if (!this.isValidPath(simplifiedPath)) {
      this.clearDrawnPath();
      return null; // Invalid path
    }

    // Split the path at the torso intersection points
    const { torsoEntryIndex, torsoExitIndex } =
      this.findTorsoIntersectionPoints(simplifiedPath);

    if (
      torsoEntryIndex === -1 ||
      torsoExitIndex === -1 ||
      torsoEntryIndex === torsoExitIndex
    ) {
      this.clearDrawnPath();
      return null; // Invalid path or couldn't find distinct entry/exit points
    }

    // Create path for left side (original drawn path)
    const leftPath = simplifiedPath;

    // Create mirrored path for right side
    const rightPath = leftPath.map((p) => ({ x: -p.x, y: p.y }));

    // Visualize the path and its mirror
    this.visualizePath(leftPath, rightPath);

    // Return the limb positions
    return {
      leftArmLegPath: leftPath,
      rightArmLegPath: rightPath,
    };
  }

  /**
   * Find the indices where the path enters and exits the torso
   */
  private findTorsoIntersectionPoints(path: Point[]): {
    torsoEntryIndex: number;
    torsoExitIndex: number;
  } {
    let entryIndex = -1;
    let exitIndex = -1;
    let insideTorso = false;

    for (let i = 0; i < path.length; i++) {
      const isInTorso = this.isPointInTorso(path[i]);

      if (!insideTorso && isInTorso) {
        // Found entry point
        entryIndex = i;
        insideTorso = true;
      } else if (insideTorso && !isInTorso) {
        // Found exit point
        exitIndex = i - 1; // Last point that was inside
        break;
      }
    }

    // If we're still inside the torso at the end of the path
    if (insideTorso && exitIndex === -1) {
      exitIndex = path.length - 1;
    }

    return { torsoEntryIndex: entryIndex, torsoExitIndex: exitIndex };
  }

  /**
   * Clear the drawn path visualization
   */
  public clearDrawnPath(): void {
    if (this.pathLine) {
      this.scene.remove(this.pathLine);
      this.pathLine.geometry.dispose();
      (this.pathLine.material as THREE.Material).dispose();
      this.pathLine = undefined;
    }

    if (this.mirroredPathLine) {
      this.scene.remove(this.mirroredPathLine);
      this.mirroredPathLine.geometry.dispose();
      (this.mirroredPathLine.material as THREE.Material).dispose();
      this.mirroredPathLine = undefined;
    }

    // Clear all limb lines
    while (this.limbLines.children.length > 0) {
      const line = this.limbLines.children[0] as THREE.Line;
      this.limbLines.remove(line);
      line.geometry.dispose();
      (line.material as THREE.Material).dispose();
    }
  }

  /**
   * Visualize the original path and mirrored path
   */
  private visualizePath(leftPath: Point[], rightPath: Point[]): void {
    // Clear previous visualization
    this.clearDrawnPath();

    // Create geometry for the left path
    const leftPoints = leftPath.map((p) => new THREE.Vector3(p.x, p.y, 0.1));
    const leftGeometry = new THREE.BufferGeometry().setFromPoints(leftPoints);
    const leftMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    this.pathLine = new THREE.Line(leftGeometry, leftMaterial);
    this.scene.add(this.pathLine);

    // Create geometry for the right path
    const rightPoints = rightPath.map((p) => new THREE.Vector3(p.x, p.y, 0.1));
    const rightGeometry = new THREE.BufferGeometry().setFromPoints(rightPoints);
    const rightMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    this.mirroredPathLine = new THREE.Line(rightGeometry, rightMaterial);
    this.scene.add(this.mirroredPathLine);
  }

  /**
   * Simplify path for performance using Ramer-Douglas-Peucker algorithm
   * @param points Array of points to simplify
   * @param tolerance Simplification tolerance
   * @returns Simplified array of points
   */
  public simplifyPath(points: Point[], tolerance: number): Point[] {
    if (points.length <= 2) return points;

    return this.rdpAlgorithm(points, tolerance);
  }

  /**
   * Ramer-Douglas-Peucker algorithm implementation
   * @param points Array of points
   * @param tolerance Simplification tolerance
   * @returns Simplified array of points
   */
  private rdpAlgorithm(points: Point[], tolerance: number): Point[] {
    // Find the point with the maximum distance from the line segment
    const findFurthestPoint = (
      start: Point,
      end: Point,
      points: Point[]
    ): { index: number; distance: number } => {
      let maxDistance = 0;
      let maxIndex = 0;

      for (let i = 1; i < points.length - 1; i++) {
        const distance = this.perpendicularDistance(points[i], start, end);

        if (distance > maxDistance) {
          maxDistance = distance;
          maxIndex = i;
        }
      }

      return { index: maxIndex, distance: maxDistance };
    };

    // Base case for recursion
    if (points.length <= 2) return [...points];

    const start = points[0];
    const end = points[points.length - 1];

    const { index, distance } = findFurthestPoint(start, end, points);

    if (distance > tolerance) {
      // If max distance is greater than tolerance, recursively simplify both segments
      const firstSegment = this.rdpAlgorithm(
        points.slice(0, index + 1),
        tolerance
      );
      const secondSegment = this.rdpAlgorithm(points.slice(index), tolerance);

      // Combine results (removing duplicated point at the junction)
      return [...firstSegment.slice(0, -1), ...secondSegment];
    } else {
      // If max distance is less than tolerance, simplify to just endpoints
      return [start, end];
    }
  }

  /**
   * Calculate perpendicular distance from a point to a line segment
   * @param point Point to check
   * @param lineStart Line segment start
   * @param lineEnd Line segment end
   * @returns Distance from point to line
   */
  private perpendicularDistance(
    point: Point,
    lineStart: Point,
    lineEnd: Point
  ): number {
    const dx = lineEnd.x - lineStart.x;
    const dy = lineEnd.y - lineStart.y;

    // Handle vertical line segments
    if (Math.abs(dx) < 0.00001) {
      return Math.abs(point.x - lineStart.x);
    }

    const slope = dy / dx;
    const intercept = lineStart.y - slope * lineStart.x;

    // Distance from point to line
    return (
      Math.abs(slope * point.x - point.y + intercept) /
      Math.sqrt(slope * slope + 1)
    );
  }

  /**
   * Check if path passes through torso
   * @param path Array of points
   * @returns true if path passes through torso
   */
  public isValidPath(path: Point[]): boolean {
    return path.some((point) => this.isPointInTorso(point));
  }

  /**
   * Check if a point is inside the torso area
   * @param point Point to check
   * @returns true if point is inside torso
   */
  private isPointInTorso(point: Point): boolean {
    const dx = point.x - this.torsoCenter.x;
    const dy = point.y - this.torsoCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance <= this.torsoRadius;
  }

  /**
   * Create THREE.js buffers for the arm and leg geometry based on drawn paths
   * @param path Points array representing the path
   * @returns Geometry for the limbs
   */
  public createLimbGeometry(path: Point[]): THREE.BufferGeometry {
    // Convert 2D points to 3D points with thickness
    const thickness = 0.1; // Thickness of the limb

    // Create geometry
    const geometry = new THREE.BufferGeometry();
    const vertices: number[] = [];
    const indices: number[] = [];

    // Must have at least 2 points to create geometry
    if (path.length < 2) {
      return geometry;
    }

    // Generate vertices along the path with thickness
    for (let i = 0; i < path.length; i++) {
      const point = path[i];

      // Direction to next or previous point
      let direction: Point;
      if (i < path.length - 1) {
        direction = {
          x: path[i + 1].x - point.x,
          y: path[i + 1].y - point.y,
        };
      } else {
        direction = {
          x: point.x - path[i - 1].x,
          y: point.y - path[i - 1].y,
        };
      }

      // Normalize direction
      const length = Math.sqrt(
        direction.x * direction.x + direction.y * direction.y
      );
      if (length > 0) {
        direction.x /= length;
        direction.y /= length;
      }

      // Calculate perpendicular direction
      const perpendicular = {
        x: -direction.y,
        y: direction.x,
      };

      // Add vertices for both sides of the path
      vertices.push(
        point.x + perpendicular.x * thickness,
        point.y + perpendicular.y * thickness,
        0,
        point.x - perpendicular.x * thickness,
        point.y - perpendicular.y * thickness,
        0
      );
    }

    // Create faces between vertices
    for (let i = 0; i < path.length - 1; i++) {
      const v0 = i * 2;
      const v1 = v0 + 1;
      const v2 = v0 + 2;
      const v3 = v0 + 3;

      // First triangle
      indices.push(v0, v1, v2);

      // Second triangle
      indices.push(v1, v3, v2);
    }

    // Set attributes
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(vertices, 3)
    );
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
  }

  /**
   * Apply the drawn body shape to the character's limbs
   */
  public applyLimbPositions(
    leftArm: THREE.Group,
    rightArm: THREE.Group,
    leftLeg: THREE.Group,
    rightLeg: THREE.Group,
    limbPositions: LimbPositions
  ): void {
    const leftPath = limbPositions.leftArmLegPath;
    const rightPath = limbPositions.rightArmLegPath;

    // Find the shoulder point (highest point with x > 0.2)
    let shoulderPoint = this.shoulderPosition;
    let hipPoint = this.hipPosition;

    // Look for potential shoulder point in the left path
    for (const point of leftPath) {
      if (point.x > 0.2 && point.y > shoulderPoint.y) {
        shoulderPoint = point;
      } else if (point.x > 0.1 && point.y < this.torsoCenter.y && point.y > 0) {
        hipPoint = point;
      }
    }

    // Calculate angles for the left arm
    const leftArmVector = this.findFarthestExtremity(
      leftPath,
      shoulderPoint,
      'upper'
    );
    if (leftArmVector) {
      const angleLeftArm = Math.atan2(
        leftArmVector.y - shoulderPoint.y,
        leftArmVector.x - shoulderPoint.x
      );
      leftArm.rotation.set(0, 0, angleLeftArm - Math.PI / 2);
    }

    // Calculate angles for left leg
    const leftLegVector = this.findFarthestExtremity(
      leftPath,
      hipPoint,
      'lower'
    );
    if (leftLegVector) {
      const angleLeftLeg = Math.atan2(
        leftLegVector.y - hipPoint.y,
        leftLegVector.x - hipPoint.x
      );
      leftLeg.rotation.set(0, 0, angleLeftLeg - Math.PI / 2);
    }

    // Mirror for right side
    const rightShoulderPoint = { x: -shoulderPoint.x, y: shoulderPoint.y };
    const rightHipPoint = { x: -hipPoint.x, y: hipPoint.y };

    // Calculate angles for the right arm
    const rightArmVector = this.findFarthestExtremity(
      rightPath,
      rightShoulderPoint,
      'upper'
    );
    if (rightArmVector) {
      const angleRightArm = Math.atan2(
        rightArmVector.y - rightShoulderPoint.y,
        rightArmVector.x - rightShoulderPoint.x
      );
      rightArm.rotation.set(0, 0, angleRightArm - Math.PI / 2);
    }

    // Calculate angles for right leg
    const rightLegVector = this.findFarthestExtremity(
      rightPath,
      rightHipPoint,
      'lower'
    );
    if (rightLegVector) {
      const angleRightLeg = Math.atan2(
        rightLegVector.y - rightHipPoint.y,
        rightLegVector.x - rightHipPoint.x
      );
      rightLeg.rotation.set(0, 0, angleRightLeg - Math.PI / 2);
    }
  }

  /**
   * Find the farthest point in a given direction (upper or lower body)
   */
  private findFarthestExtremity(
    path: Point[],
    referencePoint: Point,
    direction: 'upper' | 'lower'
  ): Point | null {
    let farthestPoint: Point | null = null;
    let maxDistance = 0;

    for (const point of path) {
      // Only consider points in the upper or lower part of the body
      if (
        (direction === 'upper' && point.y < referencePoint.y) ||
        (direction === 'lower' && point.y < referencePoint.y)
      ) {
        const dx = point.x - referencePoint.x;
        const dy = point.y - referencePoint.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > maxDistance) {
          maxDistance = distance;
          farthestPoint = point;
        }
      }
    }

    return farthestPoint;
  }

  /**
   * Generate a default straight pose
   */
  public generateDefaultShape(): LimbPositions {
    const leftPath = [
      this.shoulderPosition,
      { x: 0.6, y: 0.8 },
      this.hipPosition,
      { x: 0.3, y: -0.3 },
    ];

    const rightPath = leftPath.map((p) => ({ x: -p.x, y: p.y }));

    return {
      leftArmLegPath: leftPath,
      rightArmLegPath: rightPath,
    };
  }
}
