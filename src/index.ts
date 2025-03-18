import './style.css';
import { Game } from './game/Game';

// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Create and start the game
  const game = new Game();
  game.start();
});