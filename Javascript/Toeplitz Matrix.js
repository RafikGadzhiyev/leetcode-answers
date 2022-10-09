/*
  Given an m x n matrix, return true if the matrix is Toeplitz. Otherwise, return false.

A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same elements.
*/
var isToeplitzMatrix = function(matrix) {
    for(let i = 0; i < matrix[0].length - 1; ++i){
        let row = 1,
            checkValue = matrix[0][i];
        while(row < matrix.length && row + i < matrix[0].length){
            if(matrix[row][row + i] !== checkValue) return false;
            row++;
        }
    }
    for(let i = 0; i < matrix.length; ++i){
        let column = 1,
        checkValue = matrix[i][0];
        while(column < matrix[0].length && column + i < matrix.length){
            if(matrix[column + i][column] !== checkValue) return false;
            column++;
        }
    }

    return true;
};
