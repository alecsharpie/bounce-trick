import './styles.css';
import { Game } from './game/Game';

// Wait for DOM to be fully loaded
window.addEventListener('DOMContentLoaded', () => {
  // Create the game instance
  const game = new Game();

  // Set up the start button to hide instructions and start the game
  const startButton = document.getElementById('start-game');
  const instructionsElement = document.getElementById('instructions');

  if (startButton && instructionsElement) {
    startButton.addEventListener('click', () => {
      // Hide instructions
      instructionsElement.style.display = 'none';

      // Start the game
      game.start();
    });
  }

  // Add a restart button that appears after playing
  const createRestartButton = (): void => {
    // Check if restart button already exists
    if (document.getElementById('restart-button')) return;

    const restartButton = document.createElement('button');
    restartButton.id = 'restart-button';
    restartButton.innerText = 'Restart Game';
    restartButton.style.position = 'absolute';
    restartButton.style.bottom = '20px';
    restartButton.style.left = '50%';
    restartButton.style.transform = 'translateX(-50%)';
    restartButton.style.padding = '10px 20px';
    restartButton.style.backgroundColor = '#4CAF50';
    restartButton.style.color = 'white';
    restartButton.style.border = 'none';
    restartButton.style.borderRadius = '5px';
    restartButton.style.cursor = 'pointer';
    restartButton.style.zIndex = '30';

    restartButton.addEventListener('click', () => {
      game.restart();
    });

    document.body.appendChild(restartButton);
  };

  // Create restart button after 5 seconds of play
  setTimeout(createRestartButton, 5000);

  // Listen for 'Escape' key to show instructions again
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      // Show instructions and pause game
      if (instructionsElement) {
        instructionsElement.style.display = 'block';
        game.stop();
      }
    }
  });
});
