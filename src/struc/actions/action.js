/**
 * Represents an action emitted by a [board]{@link Board}.
 * @abstract
 */
class Action {
  constructor(board) {
    /**
     * The [board]{@link Board} the actions will be emitted through.
     * @type {Board}
     * @readonly
     */
    Object.defineProperty(this, 'Board', {value: board});
  }

  handle(data) {
    return data;
  }
}

module.exports = Action;
