/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let directions = [[-1,0], [1,0], [0,1], [0,-1]];

    let ROWS = grid.length;
    let COLS = grid[0].length;

    let dfs = (r,c) => {
        if (Math.min(r,c)<0 || r===ROWS || c===COLS || grid[r][c] === 0) return 0;

        //mark as visited
        grid[r][c] = 0;
        let area = 1;
        for (let [dr, dc] of directions) {
            area += dfs(r+dr, c+dc);
        }

        return area;
    }

    let maxArea = 0;

    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (grid[r][c] === 1) {  //Skip water cells
                maxArea = Math.max(maxArea, dfs(r, c));
            }
        }
    }

    return maxArea;
};