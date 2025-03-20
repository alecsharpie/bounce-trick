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
    console.log("Processing drawn path of length:", drawnPath.length);
    
    // Basic validation
    if (drawnPath.length < 3) {
      console.log("Path too short");
      return null;
    }
    
    // Apply simple smoothing to reduce jitter
    const smoothedPath = this.smoothPath(drawnPath);
    
    // Split the path into two halves - top half for arms, bottom half for legs
    const armPath: Point[] = [];
    const legPath: Point[] = [];
    
    // First, add the anchor points (shoulder and hip)
    armPath.push({...this.shoulderPosition});
    legPath.push({...this.hipPosition});
    
    // Find the center point of the drawing (vertically)
    let minY = Number.MAX_VALUE;
    let maxY = Number.MIN_VALUE;
    
    for (const point of smoothedPath) {
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    }
    
    const midY = (minY + maxY) / 2;
    console.log(`Drawing vertical range: ${minY} to ${maxY}, mid: ${midY}`);
    
    // Add all points to either arm or leg path based on Y position
    for (const point of smoothedPath) {
      if (point.y >= midY) {
        // Above midpoint - add to arm path
        armPath.push(point);
      } else {
        // Below midpoint - add to leg path
        legPath.push(point);
      }
    }
    
    console.log(`Split into ${armPath.length} arm points and ${legPath.length} leg points`);
    
    // Make sure both paths have enough points
    if (armPath.length < 2) {
      console.log("Arm path too short, using default");
      // Add some default points for arm
      armPath.push(
        {x: this.shoulderPosition.x + 0.2, y: this.shoulderPosition.y + 0.3},
        {x: this.shoulderPosition.x + 0.4, y: this.shoulderPosition.y + 0.2}
      );
    }
    
    if (legPath.length < 2) {
      console.log("Leg path too short, using default");
      // Add some default points for leg
      legPath.push(
        {x: this.hipPosition.x + 0.1, y: this.hipPosition.y - 0.5},
        {x: this.hipPosition.x + 0.2, y: this.hipPosition.y - 1.0}
      );
    }
    
    // Combine paths into one complete left-side path
    const leftPath = [...armPath, ...legPath];
    
    // Create mirrored path for right side
    const rightPath = leftPath.map(p => ({x: -p.x, y: p.y}));
    
    // Visualize the paths
    this.visualizePath(leftPath, rightPath);
    
    return {
      leftArmLegPath: leftPath,
      rightArmLegPath: rightPath
    };
  }
  
  /**
   * Apply smoothing to a path to reduce jitter and noise
   * Uses a simple moving average filter
   */
  private smoothPath(path: Point[]): Point[] {
    if (path.length < 4) return path;
    
    const result: Point[] = [];
    const windowSize = 3; // Size of smoothing window
    
    // Add first point unchanged
    result.push(path[0]);
    
    // Smooth middle points
    for (let i = 0; i < path.length; i++) {
      // Determine window boundaries
      const windowStart = Math.max(0, i - Math.floor(windowSize / 2));
      const windowEnd = Math.min(path.length - 1, i + Math.floor(windowSize / 2));
      let count = 0;
      let sumX = 0;
      let sumY = 0;
      
      // Calculate average within window
      for (let j = windowStart; j <= windowEnd; j++) {
        sumX += path[j].x;
        sumY += path[j].y;
        count++;
      }
      
      // Add smoothed point
      result.push({
        x: sumX / count,
        y: sumY / count
      });
    }
    
    // Ensure last point is present
    result.push(path[path.length - 1]);
    
    return result;
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

    // Create geometry for the left path with thicker, more visible line
    const leftPoints = leftPath.map((p) => new THREE.Vector3(p.x, p.y, 0.15));
    const leftGeometry = new THREE.BufferGeometry().setFromPoints(leftPoints);
    const leftMaterial = new THREE.LineBasicMaterial({ 
      color: 0x22ff44,
      linewidth: 3,
      transparent: true,
      opacity: 0.7
    });
    this.pathLine = new THREE.Line(leftGeometry, leftMaterial);
    this.scene.add(this.pathLine);

    // Create geometry for the right path
    const rightPoints = rightPath.map((p) => new THREE.Vector3(p.x, p.y, 0.15));
    const rightGeometry = new THREE.BufferGeometry().setFromPoints(rightPoints);
    const rightMaterial = new THREE.LineBasicMaterial({ 
      color: 0x4488ff,
      linewidth: 3,
      transparent: true,
      opacity: 0.7
    });
    this.mirroredPathLine = new THREE.Line(rightGeometry, rightMaterial);
    this.scene.add(this.mirroredPathLine);
    
    // Add small spheres at control points for better visualization
    this.addControlPointSpheres(leftPath, 0x22ff44);
    this.addControlPointSpheres(rightPath, 0x4488ff);
  }
  
  /**
   * Add small spheres at key control points for better visualization
   */
  private addControlPointSpheres(path: Point[], color: number): void {
    // Only add spheres at start, end, and a couple key points
    const keyPoints = [
      0,  // Start point
      Math.floor(path.length / 3),  // One third point
      Math.floor(2 * path.length / 3),  // Two thirds point
      path.length - 1  // End point
    ];
    
    for (const idx of keyPoints) {
      if (idx >= 0 && idx < path.length) {
        const point = path[idx];
        const sphereGeometry = new THREE.SphereGeometry(0.04, 8, 8);
        const sphereMaterial = new THREE.MeshBasicMaterial({
          color: color,
          transparent: true,
          opacity: 0.8
        });
        
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.set(point.x, point.y, 0.15);
        this.limbLines.add(sphere);
      }
    }
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
   * Apply the drawn body shape to create noodle-like limbs
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
    
    console.log("Applying limb positions");

    // Find the midpoint to split the path into arms and legs
    const midIndex = Math.floor(leftPath.length / 2);
    
    // Split the paths
    const leftArmPath = leftPath.slice(0, midIndex + 1);
    const leftLegPath = leftPath.slice(midIndex);
    
    const rightArmPath = rightPath.slice(0, midIndex + 1);
    const rightLegPath = rightPath.slice(midIndex);
    
    console.log(`Split paths - Arms: ${leftArmPath.length} points, Legs: ${leftLegPath.length} points`);
    
    // Create the limbs directly using the noodle function
    console.log("Creating left arm noodle");
    this.createNoodleLimb(leftArm, leftArmPath, 0x3f51b5, true);
    
    console.log("Creating right arm noodle");
    this.createNoodleLimb(rightArm, rightArmPath, 0x3f51b5, true);
    
    console.log("Creating left leg noodle");
    this.createNoodleLimb(leftLeg, leftLegPath, 0x4caf50, false);
    
    console.log("Creating right leg noodle");
    this.createNoodleLimb(rightLeg, rightLegPath, 0x4caf50, false);
    
    console.log("Noodle limbs created");
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
    console.log(`Creating ${isArm ? 'arm' : 'leg'} with path length: ${path.length}`);
    
    // Clear any existing limb parts first
    this.clearLimbs(limbGroup);
    
    // Increased number of segments for smoother limbs
    const NUM_SEGMENTS = 14;
    
    // Filter points based on whether it's an arm or leg
    let filteredPath = isArm 
      ? path.slice(0, Math.floor(path.length / 2)) // First half for arms
      : path.slice(Math.floor(path.length / 2));   // Second half for legs
    
    console.log(`Filtered path for ${isArm ? 'arm' : 'leg'}: ${filteredPath.length} points`);
    
    // If no valid points or if the path is too simple (like a straight line),
    // create a default curved limb
    if (filteredPath.length < 3 || this.isPathTooSimple(filteredPath)) {
      console.log(`Creating default ${isArm ? 'arm' : 'leg'} shape`);
      
      // Set default positions based on character pose (arms above head)
      let defaultEndPoint: Point;
      
      if (isArm) {
        // Arm default - raised above head
        defaultEndPoint = { x: startPoint.x * 0.25, y: startPoint.y + 0.7 };
      } else {
        // Leg default - straight down
        defaultEndPoint = { x: startPoint.x, y: startPoint.y - 1.2 };
      }
      
      // Create control points for a natural curve
      const ctrl1 = {
        x: startPoint.x + (defaultEndPoint.x - startPoint.x) * 0.3 + (isArm ? 0.1 : 0),
        y: startPoint.y + (defaultEndPoint.y - startPoint.y) * 0.3
      };
      
      const ctrl2 = {
        x: startPoint.x + (defaultEndPoint.x - startPoint.x) * 0.7 + (isArm ? 0.05 : 0),
        y: startPoint.y + (defaultEndPoint.y - startPoint.y) * 0.7
      };
      
      // Create a curved path with multiple segments using cubic Bezier
      const points = this.createCubicBezierPath(
        startPoint, 
        ctrl1,
        ctrl2,
        defaultEndPoint, 
        NUM_SEGMENTS
      );
      
      this.createNoodleLimb(limbGroup, points, isArm ? 0x3f51b5 : 0x4caf50, isArm);
      return;
    }
    
    // Ensure the path starts at the correct anchor point
    if (filteredPath.length > 0 && 
        (Math.abs(filteredPath[0].x - startPoint.x) > 0.01 || 
         Math.abs(filteredPath[0].y - startPoint.y) > 0.01)) {
      console.log(`Adding start point to ${isArm ? 'arm' : 'leg'}`);
      filteredPath = [startPoint, ...filteredPath];
    }
    
    // Ensure path doesn't extend too far
    if (filteredPath.length > 3) {
      const maxLength = isArm ? 1.5 : 2.0;
      filteredPath = this.limitPathLength(filteredPath, startPoint, maxLength);
    }
    
    // Resample the path to get equally spaced points
    const resampledPoints = this.resamplePathToEqualSegments(filteredPath, NUM_SEGMENTS);
    console.log(`Resampled ${isArm ? 'arm' : 'leg'} path: ${resampledPoints.length} points`);
    
    // Create the limb from these points with thickness variation
    this.createNoodleLimb(limbGroup, resampledPoints, isArm ? 0x3f51b5 : 0x4caf50, isArm);
  }
  
  /**
   * Create a cubic Bezier path for more natural curves
   */
  private createCubicBezierPath(start: Point, ctrl1: Point, ctrl2: Point, end: Point, numPoints: number): Point[] {
    const points: Point[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      
      // Cubic Bezier formula
      const mt = 1 - t;
      const mt2 = mt * mt;
      const mt3 = mt2 * mt;
      const t2 = t * t;
      const t3 = t2 * t;
      
      const x = mt3 * start.x + 3 * mt2 * t * ctrl1.x + 3 * mt * t2 * ctrl2.x + t3 * end.x;
      const y = mt3 * start.y + 3 * mt2 * t * ctrl1.y + 3 * mt * t2 * ctrl2.y + t3 * end.y;
      
      points.push({ x, y });
    }
    
    return points;
  }
  
  /**
   * Limit the length of a path to prevent overly long limbs
   */
  private limitPathLength(path: Point[], startPoint: Point, maxLength: number): Point[] {
    let accumulatedLength = 0;
    const result = [path[0]];
    
    for (let i = 1; i < path.length; i++) {
      const prevPoint = path[i - 1];
      const currentPoint = path[i];
      
      const segmentLength = Math.sqrt(
        Math.pow(currentPoint.x - prevPoint.x, 2) + 
        Math.pow(currentPoint.y - prevPoint.y, 2)
      );
      
      accumulatedLength += segmentLength;
      
      if (accumulatedLength > maxLength) {
        // Calculate the point exactly at max length
        const ratio = (maxLength - (accumulatedLength - segmentLength)) / segmentLength;
        const finalPoint = {
          x: prevPoint.x + (currentPoint.x - prevPoint.x) * ratio,
          y: prevPoint.y + (currentPoint.y - prevPoint.y) * ratio
        };
        
        result.push(finalPoint);
        break;
      }
      
      result.push(currentPoint);
    }
    
    return result;
  }
  
  /**
   * Create a simple noodle-like limb using connected cylinders
   * This gives a wiggly, flexible tube appearance
   */
  private createNoodleLimb(
    limbGroup: THREE.Group, 
    points: Point[], 
    color: number, 
    isArm: boolean
  ): void {
    // Clear any existing limb parts
    this.clearLimbs(limbGroup);
    
    // If not enough points, create a simple default limb
    if (points.length < 3) {
      console.log("Creating default noodle limb");
      this.createDefaultNoodleLimb(limbGroup, color, isArm);
      return;
    }
    
    console.log(`Creating noodle ${isArm ? 'arm' : 'leg'} with ${points.length} points`);
    
    // Fixed number of segments for consistency
    const numSegments = 10;
    
    // Create equally spaced points along the path
    const resampledPoints = this.resamplePathToEqualSegments(points, numSegments + 1);
    
    // Set thickness for limbs
    const baseThickness = isArm ? 0.13 : 0.18;
    
    // Create cylinders between consecutive points
    for (let i = 0; i < resampledPoints.length - 1; i++) {
      const start = resampledPoints[i];
      const end = resampledPoints[i + 1];
      
      // Calculate position along the limb (0 at start, 1 at end)
      const t = i / (resampledPoints.length - 2);
      
      // Taper thickness toward the end of the limb
      const thickness = baseThickness * (1 - t * 0.4);
      
      // Create a cylinder for this segment
      this.createSimpleSegment(limbGroup, start, end, color, thickness);
    }
    
    // Add a spherical cap at the end
    const lastPoint = resampledPoints[resampledPoints.length - 1];
    
    // Create a small sphere for hand/foot
    const capGeometry = new THREE.SphereGeometry(
      isArm ? 0.08 : 0.13, 
      10, 10
    );
    
    const capMaterial = new THREE.MeshStandardMaterial({
      color: isArm ? 0xffcc99 : 0x222222, // Skin tone for hands, dark for feet
      roughness: 0.6,
      metalness: 0.1
    });
    
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.set(lastPoint.x, lastPoint.y, 0);
    limbGroup.add(cap);
  }
  
  /**
   * Create a default noodle limb with a nice curve
   */
  private createDefaultNoodleLimb(
    limbGroup: THREE.Group, 
    color: number, 
    isArm: boolean
  ): void {
    // Create a path for the default limb
    const numSegments = 10;
    const points: Point[] = [];
    
    // Get the correct start point
    const startPoint = isArm ? this.shoulderPosition : this.hipPosition;
    
    if (isArm) {
      // For arms: curve going up and out, then down for hand
      for (let i = 0; i <= numSegments; i++) {
        const t = i / numSegments;
        
        // Create a nice arc for the arm
        const angle = -Math.PI/4 + t * Math.PI/2; // -45° to 45°
        const length = 0.8; // Length of arm
        
        // Add some random wiggles for a natural look
        const wiggle = Math.sin(t * Math.PI * 4) * 0.05;
        
        points.push({
          x: startPoint.x + Math.cos(angle) * length * t + wiggle,
          y: startPoint.y + Math.sin(angle) * length * t
        });
      }
    } else {
      // For legs: curve going down and slightly out
      for (let i = 0; i <= numSegments; i++) {
        const t = i / numSegments;
        
        // Create a slight curve for the leg
        const angle = Math.PI/2 + (t * Math.PI/8); // 90° to 112.5°
        const length = 1.2; // Length of leg
        
        // Add some random wiggles for a natural look
        const wiggle = Math.sin(t * Math.PI * 3) * 0.05;
        
        points.push({
          x: startPoint.x + Math.cos(angle) * length * t + wiggle,
          y: startPoint.y + Math.sin(angle) * length * t
        });
      }
    }
    
    // Create segments for the default limb
    const baseThickness = isArm ? 0.13 : 0.18;
    
    for (let i = 0; i < points.length - 1; i++) {
      const t = i / (points.length - 2);
      const thickness = baseThickness * (1 - t * 0.4);
      
      this.createSimpleSegment(limbGroup, points[i], points[i+1], color, thickness);
    }
    
    // Add cap at the end
    const lastPoint = points[points.length - 1];
    
    const capGeometry = new THREE.SphereGeometry(
      isArm ? 0.08 : 0.13, 
      10, 10
    );
    
    const capMaterial = new THREE.MeshStandardMaterial({
      color: isArm ? 0xffcc99 : 0x222222,
      roughness: 0.6,
      metalness: 0.1
    });
    
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.set(lastPoint.x, lastPoint.y, 0);
    limbGroup.add(cap);
  }
  
  /**
   * Create a simple cylinder segment between two points
   */
  private createSimpleSegment(
    limbGroup: THREE.Group,
    start: Point,
    end: Point,
    color: number,
    thickness: number
  ): void {
    // Calculate segment properties
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    // Create the cylinder geometry
    const geometry = new THREE.CylinderGeometry(
      thickness, // Top radius
      thickness, // Bottom radius 
      length,    // Height
      10         // RadialSegments - higher for smoother cylinders
    );
    
    // Create material
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.7,
      metalness: 0.1
    });
    
    // Create the mesh
    const segment = new THREE.Mesh(geometry, material);
    segment.castShadow = true;
    
    // Rotate to align with the direction
    segment.rotation.z = angle - Math.PI/2;
    
    // Position at the midpoint
    const midX = (start.x + end.x) / 2;
    const midY = (start.y + end.y) / 2;
    segment.position.set(midX, midY, 0);
    
    // Add to the limb group
    limbGroup.add(segment);
  }

  /**
   * Check if a path is too simple (like a straight line)
   */
  private isPathTooSimple(path: Point[]): boolean {
    if (path.length < 3) return true;
    
    // Check if all points are roughly in a straight line
    if (path.length >= 3) {
      const start = path[0];
      const end = path[path.length - 1];
      
      // Calculate the maximum deviation from the straight line
      let maxDeviation = 0;
      for (let i = 1; i < path.length - 1; i++) {
        const deviation = this.perpendicularDistance(path[i], start, end);
        maxDeviation = Math.max(maxDeviation, deviation);
      }
      
      // If the maximum deviation is small, the path is too simple
      return maxDeviation < 0.1;
    }
    
    return false;
  }

  /**
   * Create a curved path between points
   */
  private createCurvedPath(start: Point, mid: Point, end: Point, numPoints: number): Point[] {
    const points: Point[] = [];
    
    for (let i = 0; i < numPoints; i++) {
      const t = i / (numPoints - 1);
      
      // Quadratic Bezier curve
      const x = (1-t)*(1-t)*start.x + 2*(1-t)*t*mid.x + t*t*end.x;
      const y = (1-t)*(1-t)*start.y + 2*(1-t)*t*mid.y + t*t*end.y;
      
      points.push({ x, y });
    }
    
    return points;
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
   * Create a single limb segment between two points with custom thickness
   */
  private createLimbSegmentWithThickness(
    limbGroup: THREE.Group,
    start: Point,
    end: Point,
    color: number,
    thickness: number
  ): void {
    // Calculate segment length and angle
    const dx = end.x - start.x;
    const dy = end.y - start.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    // Create segment geometry with specified thickness
    // Use higher radial segments for smoother cylinders
    const geometry = new THREE.CylinderGeometry(thickness, thickness, length, 12);
    
    // Use slightly shinier material for better look
    const material = new THREE.MeshStandardMaterial({
      color: color,
      roughness: 0.6,
      metalness: 0.15,
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
   * Legacy method kept for compatibility
   */
  private createLimbSegment(
    limbGroup: THREE.Group,
    start: Point,
    end: Point,
    color: number
  ): void {
    // Default thickness for backward compatibility
    const thickness = 0.15;
    this.createLimbSegmentWithThickness(limbGroup, start, end, color, thickness);
  }

  /**
   * Generate a default straight pose with arms above head
   */
  public generateDefaultShape(): LimbPositions {
    // Create a straight pose with arms up
    const leftPath = [
      this.shoulderPosition, // Left shoulder
      { x: 0.3, y: 1.6 },    // Arm midpoint
      { x: 0.1, y: 2.0 },    // Hand above head
      this.hipPosition,      // Left hip
      { x: 0.2, y: 0.0 },    // Knee
      { x: 0.2, y: -0.6 }    // Foot pointing straight down
    ];

    // Mirror for right side
    const rightPath = leftPath.map((p) => ({ x: -p.x, y: p.y }));

    return {
      leftArmLegPath: leftPath,
      rightArmLegPath: rightPath,
    };
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
}
