/**
 * Enum for peice types.
 * @name Type
 * @enum {Object}
 * @readonly
 */
var Types = {
  Striker: {
    name: "striker",
    start: {X:0, Y:-1}
  },
  LeftMidfield: {
    name: "left_midfield",
    start: {X:-1, Y:-2}
  },
  RightMidfield: {
    name: "right_midfield",
    start: {X:1, Y:-2}
  },
  Defender: {
    name: "defender",
    start: {X:0, Y:-3}
  },
  Null: {
    name: "null",
    start: {X:-4, Y:-4}
  },
}

module.exports = Types;
