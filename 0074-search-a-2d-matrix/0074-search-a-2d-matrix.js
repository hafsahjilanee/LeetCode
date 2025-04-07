/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    //tc O(log(m * n))
    //Since binary search runs in O(log N) time, and you’re searching in m * n elements, it becomes O(log(m * n)).
    //sc O(1)
    if (matrix.length === 0 || matrix[0].length === 0) return false;
    const ROWS = matrix.length, COLS = matrix[0].length;
    let left = 0, right = ROWS * COLS - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        //how many complete rows fit
        const row = Math.floor(mid / COLS);
        //offset within the row
        const col = mid % COLS;
        const midVal = matrix[row][col];

        if (midVal === target) return true;
        else if (midVal < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};