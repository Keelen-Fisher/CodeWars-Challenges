const sudoku = (puzzle) => {
  /* Creating a deep copy of the puzzle. */
  const solution = JSON.parse(JSON.stringify(puzzle));

 /* Checking if the value is valid in the row, column, and 3x3 box. */
  const check = (value, row, col) => {
    for (let index = 0; index < 9; index++) {
      /* Calculating the top left corner of the 3x3 box that the cell is in. */
      let r = parseInt(row / 3) * 3, c = parseInt(col / 3) * 3;
      if (
        solution[row][index] === value ||
        solution[index][col] === value ||
        solution[parseInt(index / 3) + r][index % 3 + c] === value) {
        return false
      }
    }
    return true;
  }

  /**
   * It returns the first valid value for a given row and column.
   * @param row - the row of the cell you're trying to fill
   * @param col - column number
   * @param [value=1] - the value to check
   * @returns The value of the cell.
   */
  const guess = (row, col, value = 1) => {
    while (!check(value, row, col)) {
      value++;
      if (value > 9) {
        return null;
      }
    }
    return value > 9 ? null : value;
  }

  const next = (i, backtrack = false) => {
    const r = parseInt(i / 9);
    const c = i % 9;

    /* Checking if the cell is already filled and if it is, it will just move on to the next cell. */
    if (puzzle[r][c] > 0 && !backtrack) {
      solution[r][c] = puzzle[r][c];
      return [i + 1, backtrack];
    }

    if (puzzle[r][c] > 0 && backtrack) {
      return [i - 1, backtrack];
    }

    const cell = guess(r, c, backtrack ? solution[r][c] + 1 : 1);
    /* Checking if the cell is not null. If it is not null, it will set the value of the cell to the
    value of the cell. It will also set backtrack to false and return the next cell. */
    if (cell) {
      solution[r][c] = cell;
      backtrack = false;
      return [i + 1, backtrack]
    }

    /* Checking if the cell is null. If it is null, it will set the value of the cell to 0 and set
    backtrack to true. It will then return the previous cell. */
    if (!cell) {
      solution[r][c] = 0;
      backtrack = true;
      return [i - 1, backtrack];
    }
  }
  /* A for loop that is calling the next function. The next function is returning an array with two
  values. The first value is the next cell and the second value is a boolean value. The for loop is
  setting the value of i to the first value of the array and the value of backtrack to the second
  value of the array. */
  for (let i = 0, backtrack = false; i < 81; [i, backtrack] = next(i, backtrack)) { }

  return solution;
}
