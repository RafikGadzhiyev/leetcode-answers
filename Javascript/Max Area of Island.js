/*
  You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) 
  You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.
*/

var maxAreaOfIsland = function(grid) {
    let max = 0;
    
    const count = (g = grid, i, j, t = {t: 0}) => {
        if(i < 0 || j < 0 || i > grid.length - 1 || j > grid[0].length - 1 || grid[i][j] !== 1){
            return;
        };
        g[i][j] = -1;
        t.t++;
        count(g, i + 1, j, t);
        count(g, i, j + 1, t);
        count(g, i - 1, j, t);
        count(g, i, j - 1, t);

    }

    for(let i = 0; i < grid.length; ++i){
        for(let j = 0; j < grid[i].length; ++j){
            if(grid[i][j] === 1){
                const d = {t:0}
                count(grid, i, j, d);
                max = Math.max(max, d.t)
            }
        }
    }

    return max;
};
