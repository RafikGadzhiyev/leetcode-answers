/*
  Given a triangle array, return the minimum path sum from top to bottom.

For each step, you may move to an adjacent number of the row below. 
More formally, if you are on index i on the current row, you may move to either index i or index i + 1 on the next row.

*/

var minimumTotal = function(triangle) {
    for(let i = 1; i < triangle.length; ++i){
        for(let j = 0; j < triangle[i].length; ++j){
            let left = triangle[i - 1][j - 1] ?? Infinity,
                right = triangle[i - 1][j] ?? Infinity;
            triangle[i][j] += Math.min(left, right);
        }
    }
    return Math.min(...(triangle[triangle.length - 1]))
};
