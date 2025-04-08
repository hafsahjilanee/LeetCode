/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;

    let isDiagonalValue = (row, col) => {
        let value = matrix[row][col];

        while (row < ROWS && col < COLS) {
            if (matrix[row][col] !== value) {
                return false;
            }
            row += 1;
            col += 1;
        }

        return true
    }

    //do for top row all columns
    for (let c=0; c<COLS; c++) {
        if (!isDiagonalValue(0,c)) {
            return false;
        }
    }

    //do for the part left of diagonal, row 0 has already been checked
    for (let r=1; r<ROWS; r++) {
        if (!isDiagonalValue(r,0)) {
            return false;
        }
    }

    return true;
};