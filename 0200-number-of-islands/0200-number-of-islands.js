/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const ROWS = grid.length, COLS = grid[0].length;
    let islands = 0;
    //possible directions left right up below
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    const dfs = (r,c) => {
        if (r<0 || c<0 || r>=ROWS || c>= COLS || grid[r][c] === "0") {
            return;
        }

        //mark it as 0 so it is not visited again
        grid[r][c] ="0";

        for (const [dr,dc] of directions) {
            dfs(r+dr, c+dc);
        }
    }

    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (grid[r][c] === "1") {
                dfs(r,c);
                islands++;
            }
        }
    }

    return islands;
};
