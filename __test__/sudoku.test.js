import { TestScheduler } from "jest-cli";
import Sudoku from "./../src/sudoku.js";

describe("Sudoku", () => {
  test("should correctly create a Sudoku object with 2 properties", () => {
    const sudoku = new Sudoku(3, 6);
    expect(sudoku.row).toEqual(3);
    expect(sudoku.column).toEqual(6);
  });
  // test("should return a number from one to nine", () => {
  //   const row = new Sudoku(2);
  //   expect(row.row).toEqual(2);
  // });
});
