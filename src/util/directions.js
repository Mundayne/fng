 /**
  * Enum for directions of movement.
  * @name Direction
  * @enum {Object}
  * @readonly
  */
var Directions = {
  /** The relative co-ordinates for the Forward direction. */
  FF: {X:0, Y:1},
    /** The relative co-ordinates for the Forward and Right direction. */
  FR: {X:1, Y:1},
    /** The relative co-ordinates for the Right direction. */
  RR: {X:1, Y:0},
    /** The relative co-ordinates for the Backward and Right direction. */
  BR: {X:1, Y:-1},
    /** The relative co-ordinates for the Backward direction. */
  BB: {X:0, Y:-1},
    /** The relative co-ordinates for the Backward and Left direction. */
  BL: {X:-1, Y:-1},
    /** The relative co-ordinates for the Left direction. */
  LL: {X:-1, Y:0},
    /** The relative co-ordinates for the Forward and Left direction. */
  FL: {X:-1, Y:1},
}

module.exports = Directions;
