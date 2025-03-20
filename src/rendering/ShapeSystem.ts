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
      color: 0x00ff00, // Change to green for better visibility
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3, // More transparent
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
    // Simplify the drawn path using Ramer-Douglas-Peucker algorithm
    // Use a smaller tolerance for more detail
    const simplifiedPath = this.simplifyPath(drawnPath, 0.05);

    // Make sure we have enough points
    if (simplifiedPath.length < 3) {
      return null; // Path too short
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
   * Check if path is valid (now just checks if it has enough points)
   * @param path Array of points
   * @returns true if path is valid
   */
  public isValidPath(path: Point[]): boolean {
    return path.length >= 3; // Just need at least 3 points for a meaningful shape
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

    // Clear existing limbs
    this.clearLimbs(leftArm);
    this.clearLimbs(rightArm);
    this.clearLimbs(leftLeg);
    this.clearLimbs(rightLeg);

    // Create new segmented limbs based on the paths
    this.createSegmentedLimb(leftArm, leftPath, this.shoulderPosition, true);
    this.createSegmentedLimb(rightArm, rightPath, { x: -this.shoulderPosition.x, y: this.shoulderPosition.y }, true);
    this.createSegmentedLimb(leftLeg, leftPath, this.hipPosition, false);
    this.createSegmentedLimb(rightLeg, rightPath, { x: -this.hipPosition.x, y: this.hipPosition.y }, false);
  }

  /**
   * Clear existing limb segments
   */
  private clearLimbs(limb: THREE.Group): void {
    while (limb.children.length > 0) {
      const child = limb.children[0];
      limb.remove(child);
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        if (child.material instanceof THREE.Material) {
          child.material.dispose();
        }
      }
    }
  }

  /**
   * Create a segmented limb that follows the path
   * @param limbGroup The group to add segments to
   * @param path The path to follow
   * @param startPoint The starting point (shoulder or hip)
   * @param isArm Whether this is an arm (true) or leg (false)
   */
  private createSegmentedLimb(
    limbGroup: THREE.Group,
    path: Point[],
    startPoint: Point,
    isArm: boolean
  ): void {
    // Number of segments for each limb
    const NUM_SEGMENTS = 10;
    
    // Filter points based on whether it's an arm or leg
    let filteredPath = path.filter(point => {
      if (isArm) {
        // For arms, use points in the upper half of the body
        return point.y >= this.torsoCenter.y - 0.2;
      } else {
        // For legs, use points in the lower half of the body
        return point.y <= this.torsoCenter.y + 0.2;
      }
    });
    
    // If no valid points, create a default straight limb
    if (filteredPath.length < 2) {
      const defaultEndPoint = isArm 
        ? { x: startPoint.x * 1.5, y: startPoint.y - 1 }
        : { x: startPoint.x * 1.5, y: startPoint.y - 1.5 };
      
      // Create a straight limb with multiple segments
      const points = this.createEquallySpacedPoints(
        startPoint, 
        defaultEndPoint, 
        NUM_SEGMENTS
      );
      
      this.createLimbFromPoints(limbGroup, points, isArm ? 0x3f51b5 : 0x4caf50);
      return;
    }
    
    // Add the start point to the beginning
    filteredPath = [startPoint, ...filteredPath];
    
    // Resample the path to get equally spaced points
    const resampledPoints = this.resamplePathToEqualSegments(filteredPath, NUM_SEGMENTS);
    
    // Create the limb from these points
    this.createLimbFromPoints(limbGroup, resampledPoints, isArm ? 0x3f51b5 : 0x4caf50);
  }

  /**
   * Create equally spaced points between two points
   */
  private createEquallySpacedPoints(start: Point, end: Point, numPoints: number): Point[] {
    const points: Point[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      points.push({
        x: start.x + t * (end.x - start.x),
        y: start.y + t * (end.y - start.y)
      });
    }
    
    return points;
  }

  /**
   * Resample a path to have equally spaced segments
   */
  private resamplePathToEqualSegments(path: Point[], numSegments: number): Point[] {
    if (path.length < 2) return path;
    
    // Calculate the total path length
    let totalLength = 0;
    for (let i = 0; i < path.length - 1; i++) {
      const dx = path[i + 1].x - path[i].x;
      const dy = path[i + 1].y - path[i].y;
      totalLength += Math.sqrt(dx * dx + dy * dy);
    }
    
    // Create equally spaced points
    const segmentLength = totalLength / (numSegments - 1);
    const result: Point[] = [path[0]]; // Start with the first point
    
    let currentSegmentStart = 0;
    let accumulatedLength = 0;
    
    for (let i = 0; i < path.length - 1; i++) {
      const start = path[i];
      const end = path[i + 1];
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const segmentDistance = Math.sqrt(dx * dx + dy * dy);
      
      // Check if we need to add points within this segment
      while (accumulatedLength + segmentDistance >= (currentSegmentStart + 1) * segmentLength) {
        // Calculate how far along this segment the point should be
        const t = ((currentSegmentStart + 1) * segmentLength - accumulatedLength) / segmentDistance;
        
        // Interpolate to find the point
        const newPoint = {
          x: start.x + t * dx,
          y: start.y + t * dy
        };
        
        result.push(newPoint);
        currentSegmentStart++;
        
        // If we've added all needed points, break
        if (result.length >= numSegments) break;
      }
      
      accumulatedLength += segmentDistance;
      
      // If we've added all needed points, break
      if (result.length >= numSegments) break;
    }
    
    // If we didn't get enough points (due to rounding), add the last point
    while (result.length < numSegments) {
      result.push(path[path.length - 1]);
    }
    
    return result;
  }

  /**
   * Create a limb from an array of points
   */
  private createLimbFromPoints(limbGroup: THREE.Group, points: Point[], color: number): void {
    // Create segments between consecutive points
    for (let i = 0; i < points.length - 1; i++) {
      const start = points[i];
      const end = points[i + 1];
      
      // Create a segment between these points
      this.createLimbSegment(limbGroup, start, end, color);
    }
  }

  /**
   * Create a single limb segment between two points
   */
  private createLimbSegment(
    limbGroup: THREE.Group,
    start: Point,
    end: Point,
    color: number
  ): void {
    // Calculate segment length and angle
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    // Create segment geometry - thinner at the extremities
    const isExtremity = limbGroup.children.length > 5;
    const radius = isExtremity ? 0.1 : 0.15; // Thinner for more flexibility
    
    const geometry = new THREE.CylinderGeometry(radius, radius, length, 8);
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.1,
    });
    
    // Create segment mesh
    const segment = new THREE.Mesh(geometry, material);
    segment.castShadow = true;
    
    // Rotate to point from start to end
    segment.rotation.z = angle - Math.PI/2;
    
    // Position at midpoint between start and end
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    segment.position.set(midX, midY, 0);
    
    // Add to limb group
    limbGroup.add(segment);
  }

  /**
   * Generate a default straight pose
   */
  public generateDefaultShape(): LimbPositions {
    // Create a more interesting default pose
    const leftPath = [
      this.shoulderPosition,
      { x: 0.6, y: 1.2 }, // Arm slightly up
      { x: 0.8, y: 0.9 },
      this.hipPosition,
      { x: 0.3, y: 0.0 }, // Leg slightly bent
      { x: 0.4, y: -0.5 }
    ];

    const rightPath = leftPath.map((p) => ({ x: -p.x, y: p.y }));

    return {
      leftArmLegPath: leftPath,
      rightArmLegPath: rightPath,
    };
  }
}
