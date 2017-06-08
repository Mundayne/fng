const Peice = require('./base');
const Type = require('../../util/types');

/**
 * Represents a defender peice.
 */
 class Defender extends Peice {
   /**
    * Creates a defender peice.
    *
    * @param  {Board} board The board the peice is on.
    * @param  {Team} team  The team the peice belongs to.
    */
   constructor(board, team) {
     super(board, team, Type.Defender);
   }
 }

module.exports = Defender;
