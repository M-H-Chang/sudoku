import Columns from "./../src/column.js";

describe("column", () => {
  test("return the number that the user inputs for column", () => {
    const column = new Columns();
    expect(column.addNumber(3)).toEqual([3]);
  });
});
