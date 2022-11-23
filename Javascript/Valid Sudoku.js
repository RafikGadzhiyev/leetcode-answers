/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
*/

var isValidSudoku = function(board) {
     for(let i = 0; i < board.length; ++i){
        for(let j = 0; j < board[i].length; ++j){
            let cellValue = board[i][j];
            if(cellValue !== '.'){
                // row
                for(let n = 0; n < board[i].length; ++n){
                    if(n === j) continue;
                    if(board[i][n] === cellValue) return false;
                }
                // column
                for(let k = 0; k < board.length; ++k){
                    if(k === i)continue;
                    if(board[k][j] === cellValue) return false;
                }
                
                // 3x3
                for(let h =  0; h < 3; ++h){
                    for(let g = 0; g < 3; ++g){
                        let cellIndex = g + Math.floor(j / 3) * 3,
                            rowIndex = h + Math.floor(i / 3) * 3;
                        if(i === rowIndex && j === cellIndex) continue;
                        if(board[rowIndex][cellIndex] === cellValue) return false;
                    }
                }
            }
        }
    };

    return true;
}
