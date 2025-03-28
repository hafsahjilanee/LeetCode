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
        grid[r][c] = islandId;
        let area = 1;
        for (let [dr, dc] of directions) {
            area += dfs(r + dr, c + dc);
        }
        return area;
    };

    // Step 1: Identify all islands and store their sizes
    let hasZero = false;
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                let islandArea = dfs(r, c);
                islandAreas[islandId] = islandArea;
                islandId++;
            } else if (grid[r][c] === 0) {
                hasZero = true;
            }
        }
    }

    // If no 0s exist, the entire grid is already the largest island
    if (!hasZero) return ROWS * COLS;
    
    let maxArea = 0;

    // Flip each 0 to 1 and calculate max area by adding surrounding islands
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 0) {
                let surrounding = new Set();
                let area = 1;

                for (let [dr, dc] of directions) {
                    let newRow = r + dr;
                    let newCol = c + dc;

                    if (newRow >= 0 && newRow < ROWS && newCol >= 0 && newCol < COLS && 
                        grid[newRow][newCol] !== 0) {
                        surrounding.add(grid[newRow][newCol]);
                    }
                }

                for (let id of surrounding) {
                    area += islandAreas[id];
                }

                maxArea = Math.max(maxArea, area);
            }
        }
    }

    return maxArea;
};