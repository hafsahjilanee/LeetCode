/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    //const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    const dfs = (r,c) => {
        if (r<0 || c<0 || r===ROWS || c===COLS || grid[r][c]===0) {
            return 0;
        }

        grid[r][c] =0;

        //1 is the current and then we'll add 1 if there are any adjacent blocks
        return 1 + dfs(r+1,c) + dfs(r-1,c) + dfs(r,c+1) + dfs(r,c-1);
    }

    let area = 0;
    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (grid[r][c] === 1) {
                area = Math.max(area, dfs(r,c));
            }
        }
    }

    return area;
};