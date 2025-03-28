/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    let islandId = 2;
    let islandAreas = {};
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const ROWS = grid.length;
    const COLS = grid[0].length;

    // DFS to calculate island area and mark cells with islandId
    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= ROWS || c >= COLS || grid[r][c] !== 1) {
            return 0;
        }
        grid[r][c] = islandId; // Mark this cell with the islandId
        let area = 1; // Current cell counts as 1
        for (let [dr, dc] of directions) {
            area += dfs(r + dr, c + dc);
        }
        return area;
    };

    // Step 1: Identify all islands and store their sizes
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                let islandArea = dfs(r, c);
                islandAreas[islandId] = islandArea;
                islandId++; // Move to next unique ID
            }
        }
    }

    let maxArea = 0;

    //flip each 0 to 1 and calc max area by adding surrounding islands
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                let surrounding = new Set();
                let area = 1

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