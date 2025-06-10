/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowMap = new Map();
    let num = '';
    for (let r=0; r<grid.length; r++) {
        for (let c=0; c<grid[0].length; c++) {
            num += grid[r][c] + ',';
        }
        rowMap.set(num, (rowMap.get(num)||0)+1);
        num = '';
    };

    let count = 0;

    for (let c=0; c<grid.length; c++) {
        for (let r=0; r<grid[0].length; r++) {
            num += grid[r][c]+',';
        }
        if (rowMap.has(num)) count += rowMap.get(num);
        num = '';
    }

    return count;
};
