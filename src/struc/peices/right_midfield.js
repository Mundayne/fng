const Midfield = require('./midfield');
const Type = require('../../util/types');

/**
 * Represents a right-midfield peice.
 */
 class RightMidfield extends Midfield {
   /**
    * Creates a right-midfield peice.
    *
    * @param  {Board} board The board the peice is on.
    * @param  {Team} team  The team the peice belongs to.
    */
   constructor(board, team) {
     super(board, team, Type.RightMidfield);
   }
 }

module.exports = RightMidfield;
