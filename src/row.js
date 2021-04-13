export default function Rows() {
  this.row = [];
}

Rows.prototype.addNumber = function (number) {
  this.row.push(number);
  return this.row;
};

Rows.prototype.notRepeating = function (rowArray) {
  if (new Set(rowArray).size !== rowArray.length) {
    return "repeats numbers";
  }
  return rowArray;
};
