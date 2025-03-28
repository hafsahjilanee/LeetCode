/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    let islandId = -1;
    let islandAreas = {};
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    const dfs = (grid, r, c) => {
        if (Math.min(r, c) < 0 || r === ROWS || c === COLS || grid[r][c] !== 1) {
            return 0;
        }
        grid[r][c] = islandId;

        return 1 + dfs(grid, r + 1, c) + dfs(grid, r - 1, c) + dfs(grid, r, c + 1) + dfs(grid, r, c - 1);
    }

    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                let islandArea = dfs(grid, r, c);
                islandAreas[islandId] = islandArea;
                islandId--;
            }
        }
    }

    let maxArea = 0;

    //flip each 0 to 1 and calc max area by adding surrounding islands
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                let surrounding = new Set();
                area = 1

                for (let [nr, nc] of directions) {
                    let newRow = r + nr;
                    let newCol = c + nc;

                    if (Math.min(newRow, newCol) >= 0 && newRow < ROWS && newCol < COLS && grid[newRow][newCol] !== 0) {
                        surrounding.add(grid[newRow][newCol]);
                    }
                }

                for (let islandId of surrounding) {
                    area += islandAreas[islandId]
                }

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea || ROWS * COLS;
};