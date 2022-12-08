/*
  Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

The distance between two adjacent cells is 1.

*/

var updateMatrix = function(mat) {
    let m = mat.length,
        n = mat[0].length;
    for(let i = 0; i < m; ++i){
        for(let j = 0; j < n; ++j){
            if(mat[i][j] !== 0){
                let left = mat[i][j - 1] ?? Infinity,
                    top = mat[i - 1] ? mat[i - 1][j] : Infinity;
                    mat[i][j] = Math.min(left + 1, top + 1);
            }
        }
    }

    for(let i = m - 1; i > -1; --i){
        for(let j = n - 1; j > -1; --j){
            if(mat[i][j] !== 0){
                let right = mat[i][j + 1] ?? Infinity,
                    bottom = mat[i + 1] ? mat[i + 1][j] : Infinity;
                    mat[i][j] = Math.min(right + 1, bottom + 1, mat[i][j]);
            }

        }
    }

    return mat;
};

