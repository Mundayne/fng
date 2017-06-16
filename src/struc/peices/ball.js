const Team = require('../../util/teams');
const Type = require('../../util/types');

/**
 * Represents a game's ball.
 */
class Ball extends EventEmitter {
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
    /**
     * The type of peice the ball is.
     * @name Ball#Type
     * @type {Type}
     * @readonly
     */
    Object.defineProperty(this, 'Type', {value: Type.Ball})
    /** The x co-ordinate of the ball. */
    this.X = this.Type.start.x;
    /** The y co-ordinate of the ball. */
    this.Y = this.Type.start.x;
  }

  /**
   * Moves the ball to the new position, and checks if a goal has been scored.
   *
   * @param  {number} x The x co-ordinate to move to.
   * @param  {number} y The y co-ordinate to move to.
   */
  Kick(peice, x, y) {
    this.X = x;
    this.Y = y;

    //Check if a ball has been scored
    if (this.IsAGoal(x, y)) {
      this.Board.ActionManager.GoalAction.handle(peice);
    }
  }

  /**
   * Checks if a goal has been scored.
   *
   * @param {number} x The x co-ordinate of the ball.
   * @param {number} y The y co-ordinate of the ball.
   */
   IsAGoal(x, y) {
     if (x < 2 && x > -2) {
       if (y % 4 == 0) return true;
       else return false;
     }
   }
}

 module.exports = Ball;
