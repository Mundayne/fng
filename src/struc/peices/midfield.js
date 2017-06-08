const Peice = require('./base');
const Type = require('../../util/types');

/**
 * Represents a midfield peice.
 * @abstract
 */
 class Midfield extends Peice {
   /**
    * Creates a midfield peice.
    *
    * @param  {Board} board The board the peice is on.
    * @param  {Team} team  The team the peice belongs to.
    * @param {Type} type The type of midfield this peice is.
    */
   constructor(board, team, type) {
     super(board, team, type);
   }
 }

module.exports = Midfield;
