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
  test("should return not a valid number if column number is greater than 9", () => {
    const sudoku = new Sudoku(3, 10);
    expect(sudoku.validNumber()).toEqual("not a valid number");
  });
  test("should return not a valid number if row number is less than 1", () => {
    const sudoku = new Sudoku(0.8, 8);
    expect(sudoku.validNumber()).toEqual("not a valid number");
  });
  test("should return not a valid number if column number is less than 1", () => {
    const sudoku = new Sudoku(8, 0);
    expect(sudoku.validNumber()).toEqual("not a valid number");
  });
  test("should return the array if there are valid numbers", () => {
    const sudoku = new Sudoku(7, 6);
    expect(sudoku.validNumber()).toEqual(sudoku);
  });
  test("if row has all different numbers it is valid", () => {
    const sudoku = new Sudoku();
    expect(sudoku.validRow([])).toEqual([]);
  });
});
