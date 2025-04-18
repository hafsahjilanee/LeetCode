/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    //O n squared for time bc we exploring in 8 directions
    //O n squared for space bc in the worst case we have a grid of 0's
    let directions = [[1,0],[-1,0], [0,1], [0,-1], [1,1], [-1,1], [1,-1], [-1,-1]];
    let ROWS = grid.length;
    let COLS = grid[0].length;
    if (grid[0][0] === 1 || grid[ROWS-1][COLS-1] === 1) return -1;

    let q = []
    //row, col, distance
    q.push([0,0,1])
    //mark as visited
    grid[0][0] = 1;

    while (q.length) {
        let [row, col, distance] = q.shift();

        if (row===ROWS-1 && col === COLS-1) {
            return distance;
        }

        for (let [dr, dc] of directions) {
            let nr = row +dr;
            let nc = col + dc;

            if (nr>=0 && nc>=0 && nr<ROWS && nc<COLS && grid[nr][nc]===0) {
                //mark as visited
                grid[nr][nc] = 1;
                q.push([nr,nc, distance+1]);
            }
        }
    }

    return -1;
};