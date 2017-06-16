const Peice = require('./peices');
const Team = require('../util/teams');
const ActionManager = require('./actions/action_manager');

/**
 * Represents a game board for Fox and Geese Footy.
 */
class Board {
  constructor() {
    /**
     * The ID of the board.
     * @name Board#ID
     * @type {number}
     * @readonly
     */
    Object.defineProperty(this, 'ID', {value: Date.now});

    /**
     * All the peices on the board.
     * @name Board#Peices
     * @type {Object}
     * @readonly
     */
    Object.defineProperty(this, 'Peices', {value: {
      Ball: new Peice.Ball(this),
      Red: {
        Str: new Peice.Striker(this, Team.Red),
        LMid: new Peice.LeftMidfield(this, Team.Red),
        RMid: new Peice.RightMidfield(this, Team.Red),
        Def: new Peice.Defender(this, Team.Red)
      },
      Blue: {
        Str: new Peice.Striker(this, Team.Blue),
        LMid: new Peice.LeftMidfield(this, Team.Blue),
        RMid: new Peice.RightMidfield(this, Team.Blue),
        Def: new Peice.Defender(this, Team.Blue)
      }
    }});

    /**
     * Manages events
     * @name Board#ActionManager
     * @type {ActionManager}
     * @readonly
     */
    Object.defineProperty(this, 'ActionManager', {value: new ActionManager(this)});

    //Shortcut to the board's ball
    this.Ball = this.Peices.Ball;
  }
}

module.exports = Board;
