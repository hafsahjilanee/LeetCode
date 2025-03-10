/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let directions = [[0,1], [0,-1], [1,0], [-1,0], [1,-1],[1,1],[-1,-1],[-1,1]];
    let ROWS = grid.length;
    let COLS = grid[0].length;

    let q = [];
    if (grid[0][0] === 1 || grid[ROWS-1][COLS-1] === 1) return -1;
    //starting index 0,0 and then starting length is 1
    q.push([0,0,1])
    grid[0][0] =1;

    while (q.length) {
        let [row, col, length] = q.shift();

        if (row===ROWS-1 && col===COLS-1) return length;

        for (let [r,c] of directions) {
            let nr = row+r;
            let nc = col+c;

            if (Math.min(nr,nc)<0 || nr>=ROWS || nc>=COLS || grid[nr][nc]===1) {
                continue;
            }
            grid[nr][nc] = 1;
            q.push([nr,nc,length+1]);
        }
    }

    return -1;
};