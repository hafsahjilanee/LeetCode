/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let rowMap = new Map();

    for (let r=0; r<grid.length; r++) {
        const key = grid[r].toString(); //.toString is faster than join

        rowMap.set(key, (rowMap.get(key)||0)+1);
    }

    let count =0;

    for (let c=0; c<grid.length; c++) {
        let col = [];
        for (let r=0; r<grid[0].length; r++) {
            col.push(grid[r][c]);
        }

        const key = col.toString();
        if (rowMap.has(key)) count+= rowMap.get(key);
    }

    return count;
};