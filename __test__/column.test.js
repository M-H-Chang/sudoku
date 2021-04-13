import Column from "./../src/column.js";

describe("column", () => {
  test("should push column number into an array of numbers", () => {
    const column = new Column();
    expect(column.addNumber(5)).toEqual([5]);
  });
  test("should return duplicate numbers for columns with the same numbers", () => {
    const columns = new Column();
    columns.addNumber(5);
    columns.addNumber(5);
    expect(columns.notRepeating(columns.column)).toEqual("repeats numbers");
  });
  test("should not have the same number twice", () => {
    const columns = new Column();
    columns.addNumber(5);
    expect(columns.notRepeating(columns.column)).toEqual(columns.column);
  });
});
