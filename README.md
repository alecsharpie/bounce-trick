# Bounce Trick

A physics-based web game where players control a ragdoll character bouncing on a trampoline. Perform tricks through rotation and body shape manipulation to earn points.

## Play the Game

You can play the game online at: https://alecsharpie.github.io/bounce-trick/

## Features

- Physics-based trampoline bouncing
- Character rotation control with joystick or arrow keys
- Multiple body shapes (straight, tuck, pike, straddle)
- Trick detection system
- Scoring based on trick complexity and landing quality
- Combo system for chain tricks
- High score tracking

## Controls

- **Left joystick / Arrow keys**: Control rotation in the air
- **Shape buttons / Number keys (1-4)**: Change body shape
  - 1: Straight position
  - 2: Tuck position (knees up)
  - 3: Pike position (touch toes)
  - 4: Straddle position (legs apart)
- **D key**: Toggle debug information
- **R key**: Reset character position if stuck
- **ESC key**: Show instructions

## Development

### Prerequisites

- Node.js and npm

### Setup

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/bounce-trick.git
   cd bounce-trick
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start development server:
   ```
   npm run dev
   ```

4. Build for production:
   ```
   npm run build
   ```

5. Build for GitHub Pages:
   ```
   npm run build:gh-pages
   ```

## Technologies

- TypeScript
- Three.js for 3D rendering
- nipple.js for joystick controls
- Vite for bundling and development
- Custom physics implementation

## License

ISC License

## Credits

Developed based on the plan outlined in `plan.md`.