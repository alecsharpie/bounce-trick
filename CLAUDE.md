# Bounce Trick Development Guide

## Build & Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run test` - Run all tests
- `npm run test:watch` - Run tests in watch mode
- `npm test -- -t "test name"` - Run specific test by name

## Code Style Guidelines
- TypeScript with strict typing (noImplicitAny, strictNullChecks)
- Use ES modules import/export syntax
- Organize imports by category (external, internal)
- Files use kebab-case.ts, classes use PascalCase
- Methods use camelCase with explicit return types
- Document public methods with JSDoc comments
- Avoid console.log (use warn/error only when needed)
- Prefer early returns for error conditions
- Use type over interface for simple type definitions
- Error handling: use typed Error classes and handle all promises
- Path aliases: use @/* for imports from src directory