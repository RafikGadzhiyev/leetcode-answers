/*
  Given an m x n binary matrix mat, return the number of special positions in mat.

A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).
*/

var numSpecial = function(mat) {
    let total = 0;
    for(let i = 0; i < mat.length; i++){
        if(mat[i].reduce((a, b) => a + b, 0) === 1){
        for(let j = 0; j < mat[i].length; ++j){
            if(mat[i][j] === 1){
                total++;
                let sum = 0;
                for(let n = 0; n < mat.length; ++n){
                    if(mat[n][j] === 1){
                        sum ++;
                    }
                }
                if(sum > 1) total--;
            }
        }
        }
    }

    return total;
};
