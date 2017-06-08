/**
 * Represents a game's ball.
 */
class Ball {
  /**
   * Creates a ball.
   *
   * @param  {Board} board The game board the ball is on.
   */
  constructor(board) {
    /**
     * The board the ball is on.
     * @name Ball#Board
     * @type {Board}
     * @readonly
     */
    Object.defineProperty(this, 'Board', {value: board});
    /** The x co-ordinate of the ball. */
    this.X = 0;
    /** The y co-ordinate of the ball. */
    this.Y = 0;
  }

  /**
   * Moves the ball to the new position.
   *
   * @param  {number} x The x co-ordinate to move to.
   * @param  {number} y The y co-ordinate to move to.
   */
  Kick(x, y) {
    this.X = x;
    this.Y = y;
  }
}

module.exports = Ball;
