/**
 * The manager for emitted actions.
 */
class ActionManager {
  /**
   * Registers all the actions.
   *
   * @param  {Board} board The [board]{@link Board} the actions will be emitted through.
   */

  constructor(board) {
    /**
     * The [board]{@link Board} the actions will be emitted through.
     * @type {Board}
     * @readonly
     */
    Object.defineProperty(this, 'Board', {value: board});

    this.register(require('./move'));
    this.register(require('./goal'));
  }

  register(action) {
    this[action.name] = new Action(this.client);
  }
}

module.exports = ActionManager;
