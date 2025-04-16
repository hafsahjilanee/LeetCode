/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let rows = new Array(matrix.length).fill(false);
    let cols = new Array(matrix[0].length).fill(false);

    for (let row =0; row<matrix.length; row++) {
        for (let col =0; col<matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                rows[row] = true;
                cols[col] = true;
            }
        }
    }

    for (let row =0; row<matrix.length; row++) {
        for (let col =0; col<matrix[0].length; col++) {
            if (rows[row] || cols[col]) {
                matrix[row][col] = 0;
            }
        }
    }
};