var Sudoku = function(data) 
{
  //   Private methods
  // -------------------------

  function validateNum() {
    return data.reduce((prev, next) => {
      for (var i = 0; i < next.length; ++i) {
        if (!Number.isInteger(next[i])) {
          return false;
        }
      }
      
      return prev;
    }, true);
  }

  function validateRows() {
    return data.reduce((prev, next) => {
      if (!prev) {
        return prev;
      }
      
      var index = new Array(next.length).fill(1);
      
      next.forEach(item => {
        index[item - 1] = 0;
      });
      
      return Math.max(...index) === 0;
    }, true);
  }
  
  function validateColumns() {
    let result = new Array(data.length);
    result.forEach(item => {
      item = new Array(data.length).fill(1);
    });
    
    for (var i = 0; i < data.length; ++i) {
      for (var j = 0; j < data.length; ++j) {
        if (data[j][i] && result[data[j][i] - 1] && result[data[j][i] - 1][i]) {
          result[data[j][i] - 1][i] = 0;
        }
      }
    }

    return result.reduce((prev, next) => {
      if (!prev) {
        return prev;
      }
      
      return Math.max(...next) === 0;
    }, true);
  }
  
  function validateCubes() {
    var cubeSize = Math.sqrt(data.length);
    
    if(!Number.isInteger(cubeSize)) {
      return false;
    }
    
    for (var i = 0; i < cubeSize; ++i) {
      for (var j = 0; j < cubeSize; ++j) {
        var indexX = i * cubeSize;
        var indexY = j * cubeSize;
        var result = new Array(data.length).fill(1);

        for (var k = indexX; k < indexX + cubeSize; ++k) {
          for (var l = indexY; l < indexY + cubeSize; ++l) {
            result[data[k][l] - 1] = 0;
          }
        }
        
        if (Math.max(...result) !== 0) {
          return false;
        }
      }
    }
    
    return true;
  }

  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      return validateNum() && validateRows() && validateColumns() && validateCubes();
    }
  };
};
