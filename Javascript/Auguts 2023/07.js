/**
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
 */
var searchMatrix = function(matrix, target) {
    let row = 0,
        col = matrix[0].length - 1;

    while(row < matrix.length && col > -1){
        let value = matrix[row][col];
        if(value === target) return true;
        if(value < target) {
            row++;
        }else col--;
    }

    return false
};
