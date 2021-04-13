export default function Sudoku(row, column) {
  this.row = row;
  this.column = column;
}

Sudoku.prototype.validNumber = function () {
  if (this.row > 9 || this.row < 1 || this.column > 9 || this.column < 1) {
    return "not a valid number";
  }
  return this;
};
