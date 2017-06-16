class GoalAction extends Action {
  handle(data) {
    this.Board.emit('goal', data);
  }
}
