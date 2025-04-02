/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    //TC O(N²) (since an N × N grid has N² cells)
    //SC O(N²) Queue may store up to O(N²) cells in worst case.
    if (!grid.length || grid[0][0] === 1 || grid[grid.length-1][grid[0].length-1] === 1) return -1;

    let directions = [[-1,0], [1,0], [0,1], [0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    let q = [];
    //row, col and distance
    q.push([0,0,1]);
    grid[0][0] =1; //mark as visited

    while (q.length) {
        let [r, c, distance] = q.shift();

        if (r===ROWS-1 && c===COLS-1) return distance;

        for (let [dr,dc] of directions) {
            let nr = r+dr;
            let nc = c+dc;

            if (nr>=0 && nc>=0 && nr<ROWS && nc<COLS && grid[nr][nc]===0) {
                grid[nr][nc] = 1;
                q.push([nr,nc, distance+1]);
            }
        }
    }
    return -1;
};