# Validate Sudoku with size `NxN`

## Given a Sudoku data structure with size `NxN, N > 0 and √N == integer`, write a method to validate if it has been filled out correctly

### The data structure is a multi-dimensional Array, i.e

      [
        [7,8,4,  1,5,9,  3,2,6],
        [5,3,9,  6,7,2,  8,4,1],
        [6,1,2,  4,3,8,  7,5,9],
        
        [9,2,8,  7,1,5,  4,6,3],
        [3,5,7,  8,4,6,  1,9,2],
        [4,6,1,  9,2,3,  5,8,7],
        
        [8,7,6,  3,9,4,  2,1,5],
        [2,4,3,  5,6,1,  9,7,8],
        [1,9,5,  2,8,7,  6,3,4]
      ]

### Rules for validation

- Data structure dimension: `NxN where N > 0` and `√N == integer`

- Rows may only contain integers: `1..N (N included)`

- Columns may only contain integers: `1..N (N included)`

- 'Little squares' (`3x3` in example above) may also only contain integers: `1..N (N included)`

## Approach and Efficiency

- From the help of geeksforgeeks [explaination:](https://www.geeksforgeeks.org/sudoku-backtracking-7/)

- The best approach is to establish all possible configurations from the number 1 to the number 9 to fill all empty cells within the sudoku game.

- within this modified matrix, the next goal is to ensure that the matrix is safe or not.

- A good way to solve this is by setting up a recursive functions that takes a grid and the current row and column index.

- Once the index shows that it is at the end of the matrix based on the `Rules for Validation`, check if the grid is safe or not. If it is safe, then return true, if not, return false.

### Base Cases

- What if there is a different value aside from the rules of validation? Should we move to the next row?

### [Solution](sudoku.js)
