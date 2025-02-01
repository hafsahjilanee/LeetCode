/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    //left, right, up, down, diagnally
    const directions = [[1,0], [-1,0], [0,1], [0,-1], 
                        [1,-1], [-1,-1],[-1,1],[1,1]];
    
    if (grid[0][0] === 1) {
        return -1;
    }
    //first two indexes are starting index and last one is the length
    let q = [[0,0,1]];
    //mark first index 0,0 as visted
    grid[0][0] = 1;

    while (q.length) {
        const [r,c,length] =q.shift();

        if (r===ROWS-1 && c===COLS-1) return length;

        for (const [dr,dc] of directions) {
            const nr = r+dr, nc = c + dc;

            if (Math.min(nr,nc)<0 || nr === ROWS || nc === COLS || grid[nr][nc] === 1) {
                continue;
            }

            grid[nr][nc] = 1;
            q.push([nr,nc,length+1])
        }
    }
    return -1;
};