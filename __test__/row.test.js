import Rows from "./../src/row.js";

test("should push row number into an array of numbers", () => {
  const row = new Rows();
  expect(row.addNumber(5)).toEqual([5]);
});
