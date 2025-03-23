/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let result = [];
    let queue = [[0, 0]]; // Start from the top-left element

    while (queue.length > 0) {
        let [i, j] = queue.shift();
        result.push(nums[i][j]);

        // If we are at the start of a diagonal (first column), add the next row
        if (j === 0 && i + 1 < nums.length) {
            queue.push([i + 1, j]);
        }

        // Always add the next column in the current row (if exists)
        if (j + 1 < nums[i].length) {
            queue.push([i, j + 1]);
        }
    }

    return result;
};