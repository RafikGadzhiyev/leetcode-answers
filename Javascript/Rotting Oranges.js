/*
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

 */

var orangesRotting = function(grid) {
    let result = 0,
        totalOranges = 0;
    const queue = [];
    for(let i = 0; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === 2) {
                queue.push([i, j]);
                totalOranges++;
                result = -1;
            }
            if(grid[i][j] === 1) totalOranges++;
        }
    }  
    while(queue.length){
        let length = queue.length;
        while(length--){
            let [i, j] = queue.shift();
            grid[i][j] = 2;
            if(i > 0 && grid[i - 1][j] === 1){ 
                grid[i - 1][j] = 2;
                queue.push([i - 1, j]);
            }
            if(i < grid.length - 1 && grid[i + 1][j] === 1){
                grid[i + 1][j] = 2;
                queue.push([i + 1, j])
            }
            if(j > 0 && grid[i][j - 1] === 1){
                grid[i][j - 1] = 2;
                queue.push([i, j - 1]);
            }
            if(j < grid[0].length - 1 && grid[i][j + 1] === 1){
                grid[i][j + 1] = 2;
                queue.push([i, j + 1]);
            }
            totalOranges--;;
        }
        result++;
    }
    return totalOranges === 0 ? result : -1;
};
