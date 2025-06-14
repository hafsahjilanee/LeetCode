/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let bounds = [];
    let COLS = matrix[0].length;
    let ROWS = matrix.length;

    for (let r = 0; r<matrix.length; r++) {
        bounds.push(matrix[r][COLS-1]);
    }   

    let left = 0;
    let right = bounds.length-1;
    let mid = 0;
    let row = -1;

    while (left<=right) {
        let mid = Math.floor((left+right)/2);
        if (target === bounds[mid]) return true;

        if (target<bounds[mid]) {
            row = mid;
            right = mid-1;
        }
        else if (target>bounds[mid]) {
            left = mid+1;
        }
    }

    if (row === -1) return false;
    
    left =0;
    right= COLS-1;

    //search within the row
    while(left<=right) {
        mid = Math.floor((left+right)/2);

        if (target>matrix[row][mid]) {
            left = mid+1;
        }
        else if (target<matrix[row][mid]) {
            right = mid - 1;
        }
        else {
            return true;
        }
    }

    return false;
};