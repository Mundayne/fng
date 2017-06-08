const Directions = require('../../util/directions');
const Teams = require('../../util/teams');
const Types = require('../../util/types');

/**
 * Represents a peice on the board.
 * @abstract
 */
class Peice {

  /**
   * Creates a peice.
   * @param  {Board} board The game board the peice is on.
   * @param  {Team} team  The team the peice belongs to.
   * @param {Type} type The type of peice this is.
   */
  constructor(board, team, type) {
    /**
     * The game board the peice is on.
     * @name Peice#Board
     * @type {Board}
     * @readonly
     */
    Object.defineProperty(this, 'Board', {value: board || null});

    /**
     * The team the peice belongs to.
     * @name Peice#Team
     * @type {Team}
     * @readonly
     */
    Object.defineProperty(this, 'Team', {value: team || Teams.Null});

    /**
     * The type of peice this is.
     * @name Peice#Type
     * @type {string}
     */
    Object.defineProperty(this, 'Type', {value: type});

    /** The x co-ordinate of the peice. */
    this.X = this.Type.start.X * this.Team.Mod;
    /** The y co-ordinate of the peice. */
    this.Y = this.Type.start.Y * this.Team.Mod;
  }

  /**
   * Moves the peice in the specified direction.
   *
   * @param  {Direction} dir The direction to move the peice.
   */
  Move(dir) {
    this.X += this.Team.Mod * dir.X;
    this.Y += this.Team.Mod * dir.Y;
  }

  /**
   * Simulates the player kicking the ball
   * @see Ball#Kick
   */
  Kick() {
    let ball = this.Board.Ball;
    if (!this.IsAdjacentTo(ball)) throw new MoveError('kick out of range');

    let x = (2 * ball.X) - this.X;
    let y = (2 * ball.Y) - this.Y;
    ball.Kick(x, y);
  }

  /**
   * Checks if the peice is adjacent to the specified object
   *
   * @param  {Object} obj The object to check for.
   * @return {boolean} Whether it is adjacent or not.
   */
  IsAdjacentTo(obj) {
    let x = this.X - obj.X;
    let y = this.Y - obj.Y;

    if (x < 2 && x > -2 && y < 2 && y > -2) return true;
    else return false;
  }
}

module.exports = Peice;
