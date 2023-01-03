# Connect Four

- Take a look at wiki description of Connect Four game:

## [Wiki Connect Four](https://en.wikipedia.org/wiki/Connect_Four)

- The grid is 6 row by 7 columns, those being named from A to G.

- You will receive a list of strings showing the order of the pieces which dropped in columns:

      piecesPositionList = ["A_Red",
                            "B_Yellow",
                            "A_Red",
                            "B_Yellow",
                            "A_Red",
                            "B_Yellow",
                            "G_Red",
                            "B_Yellow"]

- The list may contain up to 42 moves and shows the order the players are playing.

- The first player who connects four items of the same color is the winner.

- You should return "Yellow", "Red" or "Draw" accordingly.

## Approach and Efficiency

- Build the board using an empty object.

- Build the grid with an object filled with letter's A-G coordinated to a number from 0-6.

- Declare functions with each focusing on adding a color to the board, checking the columns of the board, the rows of the board, and the diagonal positions split into two directions. Each function should loop throughout the rows, columns and diagonal positions and checks if each position has four of the same color.

- Lastly, create return statements for `yellow`, `red`, and `draw`.

## [Solution](connect.js)
