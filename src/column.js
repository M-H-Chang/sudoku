export default function Column() {
  this.column = [];
}

Column.prototype.addNumber = function (number) {
  this.column.push(number);
  return this.column;
};
Column.prototype.notRepeating = function (columnArray) {
  if (new Set(columnArray).size !== columnArray.length) {
    return "repeats numbers";
  }
  return columnArray;
};
