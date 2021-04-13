export default function Column() {
  this.column = [];
}

Column.prototype.addNumber = function (number) {
  this.column.push(number);
  return this.column;
};
