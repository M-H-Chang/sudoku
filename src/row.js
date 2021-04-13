export default function Rows() {
  this.row = [];
}

Rows.prototype.addNumber = function (number) {
  this.row.push(number);
  return this.row;
};
