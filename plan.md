# Trampoline Physics Game - Implementation Plan

## Game Overview

A physics-based web game where players control a ragdoll character bouncing on a trampoline. Players perform tricks through rotation and body shape manipulation, earning points based on trick complexity and landing quality. Points are used to purchase upgrades that enhance the gameplay experience.

## Core Game Mechanics

1. **Constant Bouncing Physics**
   - Character automatically bounces on trampoline
   - Landing quality affects bounce height
   - Center of mass (belly button) follows predictable physics trajectory

2. **User Input Controls**
   - Rotation control via joystick (nipple.js)
   - Body shape control via shape drawing system
   - Simple touch/click interface for menus and upgrades

3. **Scoring System**
   - Points awarded for trick execution
   - Combo multipliers for chain tricks
   - Landing quality multipliers
   - Session-based high scores

4. **Upgrade System**
   - Purchases made with accumulated points
   - Persistent upgrades stored in localStorage
   - Multiple upgrade paths (character, trampoline, tricks)

## Technical Architecture

### Tech Stack
- **TypeScript** - For type safety and better code organization
- **Three.js** - For 3D rendering
- **Custom Physics** - Simplified physics implementation
- **HTML5 & CSS3** - For UI elements
- **LocalStorage API** - For game state persistence
- **nipple.js** - For joystick control

### Project Structure

```
trampoline-game/
├── src/
│   ├── index.ts              # Entry point
│   ├── index.html            # HTML structure
│   ├── style.css             # Global styles
│   ├── game/
│   │   ├── Game.ts           # Main game controller
│   │   ├── Physics.ts        # Custom physics implementation
│   │   ├── ScoreManager.ts   # Scoring logic
│   │   ├── InputManager.ts   # User input handling
│   │   └── UpgradeManager.ts # Upgrade system
│   ├── entities/
│   │   ├── Character.ts      # Ragdoll character
│   │   ├── Trampoline.ts     # Trampoline object
│   │   └── Environment.ts    # Game environment
│   ├── rendering/
│   │   ├── Renderer.ts       # Three.js setup and management
│   │   ├── Camera.ts         # Camera management
│   │   └── Effects.ts        # Visual effects (particles, etc.)
│   ├── ui/
│   │   ├── UIManager.ts      # UI controller
│   │   ├── ScoreDisplay.ts   # In-game score display
│   │   ├── UpgradeMenu.ts    # Upgrade interface
│   │   └── ShapeCanvas.ts    # Shape drawing canvas
│   └── utils/
│       ├── Storage.ts        # LocalStorage handling
│       ├── Constants.ts      # Game constants
│       └── MathUtils.ts      # Helper math functions
├── public/                   # Static assets
├── dist/                     # Build output
├── tests/                    # Test files
├── tsconfig.json             # TypeScript configuration
├── package.json              # Dependencies
├── vite.config.ts            # Build configuration
├── .eslintrc.js              # Linting rules
└── .prettierrc               # Code formatting
```

### Development Tooling

- **Vite** - Fast development server and build tool
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Jest** - Unit testing
- **TypeScript** - Static type checking

## Detailed Implementation Plan

### Phase 1: Core Engine Setup

1. **Project Initialization**
   - Set up TypeScript + Vite project
   - Configure ESLint, Prettier, and testing
   - Install Three.js and other dependencies

2. **Basic Rendering Setup**
   - Create Three.js scene, camera, and renderer
   - Implement basic environment (ground, trampoline)
   - Set up responsive canvas sizing

3. **Custom Physics Implementation**
   - Implement simplified physics for belly button (center of mass)
   - Vertical motion with gravity and trampoline force
   - Simple collision detection

### Phase 2: Character Development

1. **Ragdoll Character Model**
   - Create simple stick figure / ragdoll model
   - Body parts: head, torso, arms (upper/lower), legs (upper/lower)
   - Joint connections with limited rotation ranges

2. **Character Physics**
   - Connect body parts with joints and constraints
   - Center of mass (belly button) drives overall movement
   - Limb positions influenced by rotation and posture

3. **Input System**
   - Implement nipple.js for rotation control
   - Create drawing canvas for shape input
   - Touch/mouse event handling

### Phase 3: Core Game Loop

1. **Trampoline Physics**
   - Implement landing detection
   - Bounce force calculation based on landing quality
   - Trampoline visual feedback

2. **Rotation Mechanics**
   - Implement torso rotation based on joystick input (nipple.js)
   - Physics-based rotation momentum
   - Trick detection (flips, spins)

3. **Freeform Shape Control System**
   - Create line drawing canvas interface
   - Implement path simplification for performance
   - Mirror drawn line to create full body shape
   - Validate line passes through torso
   - Transform line into limb positions on coronal plane

### Phase 4: Game Systems

1. **Scoring System**
   - Implement trick detection and scoring
   - Landing quality scoring
   - Combo system for multiple tricks
   - High score tracking

2. **Upgrade System**
   - Define upgrade categories and progression
   - Create upgrade purchase mechanism
   - Implement upgrade effects on gameplay
   - Save/load upgrade state

3. **UI Implementation**
   - Create in-game score display
   - Implement upgrade menu
   - Add visual feedback for tricks and scores
   - Session summary screen

### Phase 5: Optimization and Polish

1. **Performance Optimization**
   - Optimize render loop
   - Minimize garbage collection
   - Ensure consistent framerate
   - Mobile device optimization

2. **Visual Enhancements**
   - Add basic particle effects
   - Implement camera movement (shake, zoom)
   - Improve trampoline animation
   - Add visual indicators for successful tricks

3. **UX Improvements**
   - Tutorial elements
   - Input responsiveness tweaking
   - Audio feedback (basic)
   - Loading and state transitions

## Implementation Details

### Character Physics Implementation

Instead of using a full physics engine like Cannon.js, we'll implement a simplified physics system:

```typescript
// Pseudocode for simplified physics
class CharacterPhysics {
  // Center of mass physics (belly button)
  updateCenterOfMass(dt: number) {
    // Apply gravity
    this.velocity.y -= GRAVITY * dt;
    
    // Update position
    this.position.y += this.velocity.y * dt;
    
    // Check for trampoline collision
    if (this.position.y <= TRAMPOLINE_HEIGHT) {
      // Calculate bounce force based on landing quality
      const bounceForce = this.calculateBounceForce();
      this.velocity.y = bounceForce;
      
      // Reset rotation for next jump
      this.resetRotationIfNeeded();
    }
  }
  
  // Calculate how body parts should follow center of mass
  updateBodyParts() {
    // Position torso relative to center of mass
    this.torso.position.copy(this.position);
    
    // Apply current rotation to torso based on nipple.js input
    this.torso.rotation.z = this.currentRotation.z; // Rotation around coronal plane
    
    // Update limbs based on current drawn shape and rotation
    this.updateLimbsFromDrawnShape();
  }
  
  // Apply the drawn shape to limb positions
  updateLimbsFromDrawnShape() {
    if (!this.currentShape) return;
    
    // Apply drawn shape to limbs on coronal plane
    // The shape positions are relative to the torso
    for (let i = 0; i < this.currentShape.leftArmPoints.length; i++) {
      const point = this.currentShape.leftArmPoints[i];
      
      // Position is relative to torso, but affected by rotation
      const rotatedPoint = this.rotatePointAroundAxis(
        point, 
        this.bellyButton.position,
        this.currentRotation.z
      );
      
      this.leftArmSegments[i].position.copy(rotatedPoint);
    }
    
    // Mirror for right side
    // Similar implementation for legs if needed
  }
  
  // Helper to rotate a point around an axis
  rotatePointAroundAxis(point, pivot, angle) {
    // Translate point to origin
    const translated = {
      x: point.x - pivot.x,
      y: point.y - pivot.y,
      z: point.z - pivot.z
    };
    
    // Rotate
    const rotated = {
      x: translated.x * Math.cos(angle) - translated.y * Math.sin(angle),
      y: translated.x * Math.sin(angle) + translated.y * Math.cos(angle),
      z: translated.z
    };
    
    // Translate back
    return {
      x: rotated.x + pivot.x,
      y: rotated.y + pivot.y,
      z: rotated.z + pivot.z
    };
  }
}
```

### Freeform Shape Control System

For body shapes, we'll implement a freeform line drawing approach that directly controls limb positions:

1. **Line Drawing Approach:**
   - Player draws a continuous line representing desired limb positions
   - The line is mirrored to create symmetrical body shape
   - Line must pass through the torso to be valid
   - Drawn path is simplified for performance while preserving key features

```typescript
// Pseudocode for shape system
class ShapeSystem {
  // Process drawn path
  processDrawnShape(drawnPath: Point[]) {
    // Simplify the drawn path using Ramer-Douglas-Peucker algorithm
    const simplifiedPath = this.simplifyPath(drawnPath, TOLERANCE);
    
    // Validate the path passes through torso area
    if (!this.isValidPath(simplifiedPath)) {
      return null; // Invalid path
    }
    
    // Mirror the path to create full body shape
    const fullBodyShape = this.mirrorPath(simplifiedPath);
    
    // Convert path to limb control points
    return this.pathToLimbPositions(fullBodyShape);
  }
  
  // Simplify path for performance
  simplifyPath(points: Point[], tolerance: number): Point[] {
    // Implement Ramer-Douglas-Peucker algorithm
    // This reduces the number of points while preserving shape
    return rdpAlgorithm(points, tolerance);
  }
  
  // Check if path passes through torso
  isValidPath(path: Point[]): boolean {
    return path.some(point => this.isPointInTorso(point));
  }
  
  // Mirror path across vertical axis
  mirrorPath(path: Point[]): Point[] {
    const mirrored = path.map(p => ({x: -p.x, y: p.y}));
    return [...path, ...mirrored.reverse()];
  }
  
  // Convert path points to actual limb positions
  pathToLimbPositions(path: Point[]) {
    // Map path points to limb segment positions
    // Ensure constraints and physical plausibility
    return {
      leftArmPoints: this.extractLimbPoints(path, 'leftArm'),
      rightArmPoints: this.extractLimbPoints(path, 'rightArm'),
      // Legs could remain more constrained/simplified
    };
  }
}
```

### Scoring System

The scoring system will evaluate tricks based on multiple factors:

1. **Trick Detection:**
   - Track rotation amount and direction
   - Evaluate body shape complexity and execution
   - Recognize landing quality (feet first is best)

2. **Scoring Formula:**
   ```
   Score = (BasePoints × TrickDifficulty × LandingQuality × ComboMultiplier × NoveltyBonus)
   ```

3. **Trick Categories:**
   - Rotation tricks (flips, spins)
   - Shape complexity (based on curvature, control points, uniqueness)
   - Combination tricks (rotation + shape)
   - Landing quality bonus

4. **Novelty System:**
   - Track previously used shapes in a session
   - Calculate similarity between current shape and past shapes
   - Award bonus multiplier for unique/novel shapes
   - Gradually decay novelty score for repeated similar shapes

### Upgrade System

Implement upgrades that meaningfully affect gameplay:

1. **Character Upgrades:**
   - Air Control: Ability to adjust position mid-air
   - Rotation Speed: Faster rotation capability
   - Shape Mastery: Faster transitions between poses
   - Stability: More forgiving landings

2. **Trampoline Upgrades:**
   - Bounciness: Higher potential jumps
   - Size: Larger landing area
   - Stability: More consistent bounces
   - Special Effects: Visual enhancements

3. **Progression Structure:**
   - Early upgrades are cheap and impactful
   - Advanced upgrades require significant point accumulation
   - Multiple upgrade paths for player choice
   - Persistent across sessions via localStorage

## Performance Considerations

1. **Rendering Optimization:**
   - Use simple geometries for character
   - Implement object pooling for particles
   - Limit draw calls through merged geometries
   - Use level of detail (LOD) for complex objects

2. **Physics Optimization:**
   - Custom simplified physics instead of full engine
   - Update physics at fixed intervals
   - Limit physics calculations to visible elements
   - Optimize collision detection

3. **Memory Management:**
   - Minimize object creation during gameplay
   - Proper cleanup of event listeners and Three.js objects
   - Monitor and optimize garbage collection

## Testing Strategy

1. **Unit Tests:**
   - Test physics calculations
   - Test scoring logic
   - Test shape recognition
   - Test upgrade effects

2. **Performance Tests:**
   - Frame rate benchmarks
   - Memory usage monitoring
   - Load time measurements

3. **Device Testing:**
   - Test on various mobile devices
   - Test different screen sizes
   - Test touch input responsiveness

## Conclusion

This implementation plan provides a roadmap for developing a performant and engaging trampoline physics game focused on trick execution and upgrades. By using custom simplified physics rather than a full physics engine, we can maintain better control over the game feel while ensuring good performance across devices.

The modular structure allows for incremental development and testing, with clear separation of concerns between physics, rendering, game logic, and UI components. The TypeScript foundation provides type safety and better code organization throughout development.

By following this plan and focusing on the core fun loop first, we can create an MVP that captures the essence of the game before expanding with additional features and polish.