/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    // //TC O(m*n)
    // //SC O(m+n)
    // let rows = new Array(matrix.length).fill(false);
    // let cols = new Array(matrix[0].length).fill(false);

    // for (let row =0; row<matrix.length; row++) {
    //     for (let col =0; col<matrix[0].length; col++) {
    //         if (matrix[row][col] === 0) {
    //             rows[row] = true;
    //             cols[col] = true;
    //         }
    //     }
    // }

    // for (let row =0; row<matrix.length; row++) {
    //     for (let col =0; col<matrix[0].length; col++) {
    //         if (rows[row] || cols[col]) {
    //             matrix[row][col] = 0;
    //         }
    //     }
    // }

    /////////////////////////////////////////////////////////////////////////////////////
    //TC iterate throughout entire grid so O(m*n)
    //0(1) space solution

    let dfs = (r, c, direction) => {
        //first check if r or c are out of bounds
        if (r >= 0 && r < matrix.length && c >= 0 && c < matrix[0].length && matrix[r][c] !== 0) {
            //mark as visited by a special character
            matrix[r][c] = '*';

            if (direction === "U") {
                dfs(r - 1, c, "U");
            }
            else if (direction === "D") {
                dfs(r + 1, c, "D");
            }
            else if (direction === "L") {
                dfs(r, c - 1, "L");
            }
            else {
                dfs(r, c + 1, "R");
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                //up
                dfs(row - 1, col, "U");
                //down
                dfs(row + 1, col, "D");
                //left
                dfs(row, col - 1, "L");
                //right
                dfs(row, col + 1, "R");
            }
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === '*') {
                matrix[row][col] = 0;
            }
        }
    }


};