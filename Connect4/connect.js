/* Creating a board object and a grid object. */
var board = {};
var GRID = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

function whoIsWinner(piecesPositionList) {

  function addingChip(turn) {
    var pos, color;
   /* A destructuring assignment. It is a way to assign multiple variables at once. */
    [pos, color] = turn.split('_');
    /* Pushing the color into the board object. */
    board[GRID[pos]].push(color);
  };

  function checkHorizonatal(col, row) {
   /* Assigning the value of the board object to the variable value. */
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
     /* Checking if the value of the board object is not equal to the value of the variable value. */
      if (board[col + q][row] != value) {
        return false;
      };
    };
    return true;
  };

  // Repeated for loop and if conditional statement for vertical position of the board
  function checkVertical(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col][row + q] != value) {
        return false;
      };
    };
    return true;
  };

  
  // Repeated for loop and if conditional statement for 1st diagonal position of the board
  function checkDiagonalA(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col + q][row + q] != value) {
        return false;
      };
    };
    return true;
  };

  
  // Repeated for loop and if conditional statement for 2nd diagonal position of the board
  function checkDiagonalB(col, row) {
    var value = board[col][row];
    for (var q = 1; q < 4; ++q) {
      if (board[col + q][row - q] != value) {
        return false;
      };
    };
    return true;
  };

  function winner(col, row) {
   /* Checking if the checkHorizonatal, checkVertical, checkDiagonalA, and checkDiagonalB functions are
   true. If they are true, then it will return the color of the chip. */
    return checkHorizonatal(col, row) ||
      checkVertical(col, row) ||
      checkDiagonalA(col, row) ||
      checkDiagonalB(col, row);
  };


  /* Creating an array of 10 empty arrays. */
  for (var q = 0; q < 10; ++q) {
    board[q] = [];
  };

  /* Looping through the array of piecesPositionList and calling the addingChip function. */
  
  for (var turn of piecesPositionList) {
    addingChip(turn);

    /* Checking if the winner function is true. If it is true, then it will return the color of the
    chip. */
    for (col = 0; col < 7; ++col) {
      for (row = 0; row < board[col].length; ++row) {
        if (winner(col, row)) {
          return board[col][row];
        };
      };
    };
  };
  //   console.log(board);
  return "Draw";
};
