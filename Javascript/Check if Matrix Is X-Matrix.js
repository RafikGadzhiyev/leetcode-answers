/*
A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.
Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.
*/

var checkXMatrix = function(grid) {
    let n = grid.length;
    for(let i = 0; i < n; ++i){
        if(grid[i][i] === 0 || grid[i][n - i - 1] === 0) return false;
        for(let j = 0; j < grid[i].length; ++j){
            if(i === j || i + j === n - 1) continue;
            if(grid[i][j] !== 0) return false;
        }
    }
    return true;
};
