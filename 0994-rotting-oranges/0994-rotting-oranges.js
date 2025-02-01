/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    //solving with bfs
    const ROWS=grid.length, COLS = grid[0].length;

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let fresh = 0, time = 0;
    let q = [];

    for (let r = 0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            if (grid[r][c] === 1) {
                fresh++;
            }
            if (grid[r][c] === 2) {
                q.push([r,c]);
            }
        }
    }

    while (q.length && fresh>0) {
        const qLength = q.length;
        for (let i = 0; i<qLength; i++) {
            const [curR, curC] = q.shift();

            for (const [dr, dc] of directions) {
                const nr = curR + dr;
                const nc = curC + dc;

                if (Math.min(nr,nc)<0 || nr === ROWS || nc === COLS || grid[nr][nc] === 2 || grid[nr][nc] === 0) {
                    continue;
                }

                grid[nr][nc] = 2;
                q.push([nr,nc]);
                fresh--;
            }
        }
        time++;
    }

    return fresh? -1 : time;
};