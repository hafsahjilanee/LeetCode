/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestDistance = function (grid) {
    const directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    let distMatrix = Array.from({ length: ROWS }, () => Array(COLS).fill(0));

    //BFS
    const BUILDING = 1;
    const OBSTACLE = 2;
    let EMPTY_LAND = 0;

    let minDistance = Infinity;

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === BUILDING) {
                let localDistance = Infinity;
                //kick off bfs
                //row, column, distance we have travlled
                let q = [[r, c, 0]];

                while (q.length) {
                    let [currRow, currCol, distance] = q.shift();

                    for (let [dr, dc] of directions) {
                        let nr = currRow + dr;
                        let nc = currCol + dc;

                        if (nr >= 0 && nc >= 0 && nr < ROWS && nc < COLS && grid[nr][nc] === EMPTY_LAND) {
                            grid[nr][nc] -= 1;
                            // the new 1 being added to distance 
                            distMatrix[nr][nc] += distance +1
                            q.push([nr, nc, distance+1]);

                            localDistance = Math.min(localDistance, distMatrix[nr][nc]);
                        }
                    }
                }
                EMPTY_LAND -=1;
                minDistance = localDistance;
            }
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};