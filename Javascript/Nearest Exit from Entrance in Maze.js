/*
You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). 
You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall,
and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. 
An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

 
*/

var nearestExit = function(maze, entrance) {
    let result = Infinity;

    const queue = [entrance];
    maze[entrance[0]][entrance[1]] = 0;
    const dir = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    while(queue.length){
        const cell = queue.shift();
        let row = cell[0],
            column = cell[1];

        for(let [rowOffset, colOffset] of dir) {
            if(rowOffset === 1 && row + rowOffset > maze.length - 1) continue;
            if(rowOffset === -1 && row + rowOffset < 0) continue;
            if(colOffset === 1 && column + colOffset > maze[0].length - 1) continue;
            if(colOffset === -1  && column + colOffset < 0) continue;
            if(maze[row + rowOffset][column + colOffset] === '.'){
                queue.push([row + rowOffset, column + colOffset]);
                maze[row + rowOffset][column + colOffset] = 1 + maze[row][column];
                if(row + rowOffset === 0 || row + rowOffset === maze.length - 1 || column + colOffset === 0 || column + colOffset === maze[0].length - 1){
                    result=Math.min(result, maze[row + rowOffset][column + colOffset]);
                }
            }
        }
    }
    console.table(maze);
    return isFinite(result) ? result : -1;
};
