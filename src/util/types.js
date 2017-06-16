/**
 * Enum for peice types.
 * @name Type
 * @enum {Object}
 * @readonly
 */
var Types = {
  Striker: {
    name: "striker",
    start: {x:0, y:-1},
    img: {'./html/img/str.jpg'}
  },
  LeftMidfield: {
    name: "left_midfield",
    start: {x:-1, y:-2},
    img: {'./html/img/mid.jpg'}
  },
  RightMidfield: {
    name: "right_midfield",
    start: {x:1, y:-2},
    img: {'./html/img/mid.jpg'}
  },
  Defender: {
    name: "defender",
    start: {x:0, y:-3},
    img: {'./html/img/def.jpg'}
  },
  Ball: {
    name: "ball",
    start: {x:0, y:0},
    img: {'./html/img/ball.png'}
  },
  Null: {
    name: "null",
    start: {x:-4, y:-4}
  },
}

module.exports = Types;
