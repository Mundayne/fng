const Board = require('./src/struc/board');
const Direction = require('./src/util/directions');

var Game = new Board();
var RedDef = Game.Peices.Red.Def;
var BlueDef = Game.Peices.Blue.Def;
RedDef.Move(Direction.LL);
BlueDef.Move(Direction.FF);

console.log(RedDef.X + "," + RedDef.Y);
console.log(BlueDef.X + "," + BlueDef.Y);
