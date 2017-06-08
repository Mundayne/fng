const Peice = require('./base');
const Type = require('../../util/types');

/**
 * Represents a striker peice.
 */
 class Striker extends Peice {
   /**
    * Creates a striker peice.
    *
    * @param  {Board} board The board the peice is on.
    * @param  {Team} team  The team the peice belongs to.
    */
   constructor(board, team) {
     super(board, team, Type.Striker);
   }
 }

module.exports = Striker;
