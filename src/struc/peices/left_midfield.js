const Midfield = require('./midfield');
const Type = require('../../util/types');

/**
 * Represents a left-midfield peice.
 */
 class LeftMidfield extends Midfield {
   /**
    * Creates a left-midfield peice.
    *
    * @param  {Board} board The board the peice is on.
    * @param  {Team} team  The team the peice belongs to.
    */
   constructor(board, team) {
     super(board, team, Type.LeftMidfield);
   }
 }

module.exports = LeftMidfield;
