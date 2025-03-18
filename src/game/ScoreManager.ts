import { Trick } from '../entities/Character';

// Base points for different trick types
const TRICK_BASE_POINTS = {
  'half flip': 50,
  flip: 100,
  'tuck flip': 150,
  'pike flip': 200,
  'straddle flip': 250,
};

// Multiplier for combos
const COMBO_MULTIPLIER = 1.5;
const COMBO_DURATION = 5000; // 5 seconds to maintain combo

// Multiplier for novelty (new tricks)
const NOVELTY_BONUS = 1.2;

export class ScoreManager {
  private score: number = 0;
  private highScore: number = 0;
  private combo: number = 0;
  private lastTrickTime: number = 0;
  private lastTrickType: string = '';
  private performedTricks: Set<string> = new Set();

  constructor() {
    // Load high score from localStorage if available
    this.loadHighScore();
    // ScoreManager initialization complete
  }

  private loadHighScore(): void {
    const savedHighScore = localStorage.getItem('trampoline-high-score');
    if (savedHighScore) {
      this.highScore = parseInt(savedHighScore, 10);
    }
  }

  private saveHighScore(): void {
    localStorage.setItem('trampoline-high-score', this.highScore.toString());
  }

  public calculatePoints(trick: Trick, landingQuality: number): number {
    // Get base points for the trick type
    const basePoints =
      TRICK_BASE_POINTS[trick.type as keyof typeof TRICK_BASE_POINTS] || 50;

    // Apply difficulty multiplier from the trick
    let points = basePoints * trick.difficultyMultiplier;

    // Apply landing quality multiplier (0.1 to 1.0)
    points *= Math.max(0.1, landingQuality);

    // Check if this is a new trick for novelty bonus
    const trickId = `${trick.type}-${trick.shape}`;
    let noveltyBonus = 1.0;

    if (!this.performedTricks.has(trickId)) {
      noveltyBonus = NOVELTY_BONUS;
      this.performedTricks.add(trickId);
    }

    points *= noveltyBonus;

    // Check for combo
    const now = Date.now();
    if (
      now - this.lastTrickTime < COMBO_DURATION &&
      this.lastTrickType !== trick.type
    ) {
      this.combo++;
      points *= Math.pow(COMBO_MULTIPLIER, Math.min(this.combo, 3)); // Cap combo multiplier
    } else {
      this.combo = 0;
    }

    // Update last trick info
    this.lastTrickTime = now;
    this.lastTrickType = trick.type;

    // Round to nearest 10
    return Math.round(points / 10) * 10;
  }

  public addPoints(points: number): void {
    this.score += points;

    // Update high score if needed
    if (this.score > this.highScore) {
      this.highScore = this.score;
      this.saveHighScore();
      this.updateHighScoreDisplay();
    }

    // Display points popup
    this.displayPointsPopup(points);
  }

  private displayPointsPopup(points: number): void {
    // Create a points popup element
    const popup = document.createElement('div');
    popup.className = 'points-popup';
    popup.textContent = `+${points}`;
    popup.style.position = 'absolute';
    popup.style.color = points >= 200 ? '#FFD700' : 'white';
    popup.style.fontSize = points >= 200 ? '28px' : '24px';
    popup.style.fontWeight = 'bold';
    popup.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    popup.style.userSelect = 'none';
    popup.style.pointerEvents = 'none';
    popup.style.top = '100px';
    popup.style.right = '20px';
    popup.style.opacity = '1';
    popup.style.transition = 'all 1s';

    document.body.appendChild(popup);

    // Animate the popup
    setTimeout(() => {
      popup.style.opacity = '0';
      popup.style.transform = 'translateY(-50px)';

      // Remove the element after animation completes
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 1000);
    }, 50);
  }

  private updateHighScoreDisplay(): void {
    const highScoreDisplay = document.getElementById('high-score-display');
    if (highScoreDisplay) {
      highScoreDisplay.textContent = `High Score: ${this.highScore}`;
    } else {
      // Create high score display if it doesn't exist
      this.createHighScoreDisplay();
    }
  }

  private createHighScoreDisplay(): void {
    const highScoreDisplay = document.createElement('div');
    highScoreDisplay.id = 'high-score-display';
    highScoreDisplay.style.position = 'absolute';
    highScoreDisplay.style.top = '50px';
    highScoreDisplay.style.right = '20px';
    highScoreDisplay.style.fontSize = '16px';
    highScoreDisplay.style.color = 'white';
    highScoreDisplay.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.5)';
    highScoreDisplay.textContent = `High Score: ${this.highScore}`;
    document.body.appendChild(highScoreDisplay);
  }

  public getScore(): number {
    return this.score;
  }

  public getHighScore(): number {
    return this.highScore;
  }

  public resetScore(): void {
    this.score = 0;
    this.combo = 0;
    this.lastTrickTime = 0;
    this.lastTrickType = '';
    this.performedTricks.clear();
  }
}
