import Rows from "./../src/row.js";

describe("Row", () => {
  test("should push row number into an array of numbers", () => {
    const rows = new Rows();
    expect(rows.addNumber(5)).toEqual([5]);
  });
  test("should not have the same number twice", () => {
    const rows = new Rows();
    rows.addNumber(5);
    expect(rows.notRepeating(rows.row)).toEqual(rows.row);
  });
  test("should return duplicate numbers for rows with the same numbers", () => {
    const rows = new Rows();
    rows.addNumber(5);
    rows.addNumber(5);
    expect(rows.notRepeating(rows.row)).toEqual("repeats numbers");
  });
});
