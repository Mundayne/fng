function MoveError(message) {
  this.name = "MoveError";
  this.message = message || "Move Error";
  this.stack = (new Error()).stack;
}
MoveError.prototype = Object.create(Error.prototype);
MoveError.prototype.constructor = MoveError;

module.exports = MoveError;
