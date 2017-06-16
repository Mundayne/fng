class MoveAction extends Action {
  handle(data) {
    this.Board.emit('move', data);
  }
}
