import { TestScheduler } from "jest-cli";
import Sudoku from "./../src/sudoku.js";

describe("Sudoku", () => {
  test("should correctly create a Sudoku object with 2 properties", () => {
    const sudoku = new Sudoku(3, 6);
    expect(sudoku.row).toEqual(3);
    expect(sudoku.column).toEqual(6);
  });
  test("should return not a valid number if it is not 1 through 9", () => {
    const sudoku = new Sudoku(10, 9);
    expect(sudoku.validNumber()).toEqual("not a valid number");
  });
});
