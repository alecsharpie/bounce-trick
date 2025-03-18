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
  leftArmPoints: Point[];
  rightArmPoints: Point[];
  leftLegPoints?: Point[];
  rightLegPoints?: Point[];
}

/**
 * ShapeSystem for freeform line drawing to control limb positions
 */
export class ShapeSystem {
  private scene: THREE.Scene;
  private drawnPath: Point[] = [];
  private pathLine?: THREE.Line;
  private mirroredPathLine?: THREE.Line;
  private limbLines: THREE.Group;
  private readonly torsoCenter: Point = { x: 0, y: 0 };
  private readonly torsoRadius: number = 0.5;
  private readonly TOLERANCE: number = 0.1; // Simplification tolerance

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.limbLines = new THREE.Group();
    this.scene.add(this.limbLines);
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
    
    // Mirror the path to create full body shape
    const fullBodyShape = this.mirrorPath(simplifiedPath);
    
    // Visualize the path and its mirror
    this.visualizePath(simplifiedPath, fullBodyShape);
    
    // Convert path to limb control points
    return this.pathToLimbPositions(fullBodyShape);
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
  private visualizePath(originalPath: Point[], mirroredPath: Point[]): void {
    // Clear previous visualization
    this.clearDrawnPath();
    
    // Create geometry for the original path
    const originalPoints = originalPath.map(p => new THREE.Vector3(p.x, p.y, 0.1));
    const originalGeometry = new THREE.BufferGeometry().setFromPoints(originalPoints);
    const originalMaterial = new THREE.LineBasicMaterial({ color: 0x00ff00 });
    this.pathLine = new THREE.Line(originalGeometry, originalMaterial);
    this.scene.add(this.pathLine);
    
    // Create geometry for the mirrored path
    const mirroredPoints = mirroredPath.map(p => new THREE.Vector3(p.x, p.y, 0.1));
    const mirroredGeometry = new THREE.BufferGeometry().setFromPoints(mirroredPoints);
    const mirroredMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    this.mirroredPathLine = new THREE.Line(mirroredGeometry, mirroredMaterial);
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
    const findFurthestPoint = (start: Point, end: Point, points: Point[]): { index: number; distance: number } => {
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
      const firstSegment = this.rdpAlgorithm(points.slice(0, index + 1), tolerance);
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
  private perpendicularDistance(point: Point, lineStart: Point, lineEnd: Point): number {
    const dx = lineEnd.x - lineStart.x;
    const dy = lineEnd.y - lineStart.y;
    
    // Handle vertical line segments
    if (Math.abs(dx) < 0.00001) {
      return Math.abs(point.x - lineStart.x);
    }
    
    const slope = dy / dx;
    const intercept = lineStart.y - slope * lineStart.x;
    
    // Distance from point to line
    return Math.abs(slope * point.x - point.y + intercept) / Math.sqrt(slope * slope + 1);
  }
  
  /**
   * Check if path passes through torso
   * @param path Array of points
   * @returns true if path passes through torso
   */
  public isValidPath(path: Point[]): boolean {
    return path.some(point => this.isPointInTorso(point));
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
   * Mirror path across vertical axis
   * @param path Array of points
   * @returns Mirrored array of points
   */
  public mirrorPath(path: Point[]): Point[] {
    const mirrored = path.map(p => ({ x: -p.x, y: p.y }));
    // Return mirrored points in reverse to maintain continuity
    return [...path, ...mirrored.reverse()];
  }
  
  /**
   * Convert path points to actual limb positions
   * @param path Array of points
   * @returns LimbPositions object with limb control points
   */
  public pathToLimbPositions(path: Point[]): LimbPositions {
    return {
      leftArmPoints: this.extractLimbPoints(path, 'leftArm'),
      rightArmPoints: this.extractLimbPoints(path, 'rightArm'),
      leftLegPoints: this.extractLimbPoints(path, 'leftLeg'),
      rightLegPoints: this.extractLimbPoints(path, 'rightLeg')
    };
  }
  
  /**
   * Extract points for a specific limb from the full path
   * @param path Full body path
   * @param limbType Type of limb to extract
   * @returns Array of points for the specified limb
   */
  private extractLimbPoints(path: Point[], limbType: string): Point[] {
    const pathLength = path.length;
    let startIndex = 0;
    let endIndex = 0;
    
    // Define sections of the path that correspond to each limb
    switch (limbType) {
      case 'leftArm':
        // Left arm is in the first quarter of the path
        startIndex = 0;
        endIndex = Math.floor(pathLength / 4);
        break;
      case 'rightArm':
        // Right arm is in the last quarter of the path
        startIndex = Math.floor(3 * pathLength / 4);
        endIndex = pathLength - 1;
        break;
      case 'leftLeg':
        // Left leg is in the second quarter of the path
        startIndex = Math.floor(pathLength / 4);
        endIndex = Math.floor(pathLength / 2);
        break;
      case 'rightLeg':
        // Right leg is in the third quarter of the path
        startIndex = Math.floor(pathLength / 2);
        endIndex = Math.floor(3 * pathLength / 4);
        break;
    }
    
    // Extract the points for this limb
    const limbPoints = path.slice(startIndex, endIndex + 1);
    
    // Ensure we have at least 2 points for each limb
    if (limbPoints.length < 2) {
      // If not enough points, generate a default line for this limb
      return this.generateDefaultLimbPoints(limbType);
    }
    
    return limbPoints;
  }
  
  /**
   * Generate default points for a limb when there are not enough points
   * @param limbType Type of limb to generate default points for
   * @returns Default array of points for the specified limb
   */
  private generateDefaultLimbPoints(limbType: string): Point[] {
    switch (limbType) {
      case 'leftArm':
        return [
          { x: 0.4, y: 1.4 }, // Shoulder
          { x: 0.6, y: 0.8 }  // Hand
        ];
      case 'rightArm':
        return [
          { x: -0.4, y: 1.4 }, // Shoulder
          { x: -0.6, y: 0.8 }  // Hand
        ];
      case 'leftLeg':
        return [
          { x: 0.2, y: 0.5 }, // Hip
          { x: 0.3, y: -0.3 } // Foot
        ];
      case 'rightLeg':
        return [
          { x: -0.2, y: 0.5 }, // Hip
          { x: -0.3, y: -0.3 } // Foot
        ];
      default:
        return [
          { x: 0, y: 0 },
          { x: 0, y: -0.5 }
        ];
    }
  }
  
  /**
   * Apply the limb positions to the character
   * @param character Character instance
   * @param limbPositions LimbPositions object
   */
  public applyLimbPositions(
    leftArm: THREE.Group, 
    rightArm: THREE.Group, 
    leftLeg: THREE.Group, 
    rightLeg: THREE.Group, 
    limbPositions: LimbPositions
  ): void {
    // Apply left arm position
    if (limbPositions.leftArmPoints && limbPositions.leftArmPoints.length >= 2) {
      const start = limbPositions.leftArmPoints[0];
      const end = limbPositions.leftArmPoints[limbPositions.leftArmPoints.length - 1];
      
      // Calculate rotation angles
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      leftArm.rotation.set(0, 0, angle - Math.PI / 2);
    }
    
    // Apply right arm position
    if (limbPositions.rightArmPoints && limbPositions.rightArmPoints.length >= 2) {
      const start = limbPositions.rightArmPoints[0];
      const end = limbPositions.rightArmPoints[limbPositions.rightArmPoints.length - 1];
      
      // Calculate rotation angles
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      rightArm.rotation.set(0, 0, angle - Math.PI / 2);
    }
    
    // Apply left leg position
    if (limbPositions.leftLegPoints && limbPositions.leftLegPoints.length >= 2) {
      const start = limbPositions.leftLegPoints[0];
      const end = limbPositions.leftLegPoints[limbPositions.leftLegPoints.length - 1];
      
      // Calculate rotation angles
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      leftLeg.rotation.set(0, 0, angle - Math.PI / 2);
    }
    
    // Apply right leg position
    if (limbPositions.rightLegPoints && limbPositions.rightLegPoints.length >= 2) {
      const start = limbPositions.rightLegPoints[0];
      const end = limbPositions.rightLegPoints[limbPositions.rightLegPoints.length - 1];
      
      // Calculate rotation angles
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      rightLeg.rotation.set(0, 0, angle - Math.PI / 2);
    }
  }
}