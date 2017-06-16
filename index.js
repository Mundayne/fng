const Board = require('./src/struc/board');
const Type = require('./src/util/types');

const Direction = require('./src/util/directions');

const canvas = document.getElementById('fng-board');
const ctx = canvas.getContext('2d');
/*
const BOARD_GAP = 50;
const TILE_SIZE = 50;
const HALF = 250;

var Game = new Board();

function drawPeice(peice) {
  ctx.drawImage(peice.Type.img, ConvertX(peice.X), ConvertY(peice.Y));
}

function ConvertX(x) {
  return (TILE_SIZE * x) + HALF;
}

function ConvertY(y) {
  return -(TILE_SIZE * y) + HALF;
}

Game.on('move', p => {
  drawPeice(p);
});

Game.Peices.Red.Def.Move(Direction.FF);
*/
ctx.drawImage('./html/img/ball.png', 250, 250);
