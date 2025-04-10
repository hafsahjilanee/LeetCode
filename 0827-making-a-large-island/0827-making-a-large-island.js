/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
    //TC O(n^2)
    //SC O(n^2)
    const directions = [[-1,0], [0,1], [1,0], [0,-1]];
    const ROWS = grid.length;
    const COLS = grid[0].length;
    let islandId = 2;
    let islandArea = {};

    let dfs = (r,c) => {
        if (r<0 || c<0 || r===ROWS || c===COLS || grid[r][c] !==1) {
            return 0;
        }
        let area = 1;
        grid[r][c] = islandId; // ✅ Mark before DFS

        for (let [dr, dc] of directions) {
            let nr = r+dr;
            let nc = c+dc;

            area += dfs(nr, nc);
        }

        return area;
    }

    let hasZero = false;

    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (grid[r][c] === 1) {
                //calculate area 
                let area = dfs(r,c)
                islandArea[islandId] = area;
                islandId++;
            }
            else if (grid[r][c] === 0) {
                hasZero = true;
            }
        }
    }

    //means our grid is only made up of 1's
    if (!hasZero) return ROWS*COLS;

    let maxArea = 0;

    for (let r=0; r<ROWS; r++) {
        for (let c=0; c<COLS; c++) {
            if (grid[r][c] === 0) {
                let currentArea = 1;
                let surrounding = new Set();

                for (let [dr,dc] of directions) {
                    let nr = r+dr;
                    let nc = c+dc;

                    if (nr>=0 && nc>=0 && nr<ROWS && nc<COLS && grid[nr][nc] !==0) {
                        surrounding.add(grid[nr][nc]);
                    }
                }

                for (let islandId of surrounding) {
                    currentArea += islandArea[islandId];
                } 

                maxArea = Math.max(maxArea, currentArea);
            }
        }
    }

    return maxArea;
};