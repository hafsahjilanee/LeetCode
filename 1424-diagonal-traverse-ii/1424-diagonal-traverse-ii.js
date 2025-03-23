/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let result = [];
    let queue = [[0, 0]]; // Start from the top-left element

    while (queue.length > 0) {
        let [r, c] = queue.shift();
        result.push(nums[r][c]);

        // If we are at the start of a diagonal (first column), add the next row
        if (c === 0 && r + 1 < nums.length) {
            queue.push([r + 1, c]);
        }

        // Always add the next column in the current row (if exists)
        if (c + 1 < nums[r].length) {
            queue.push([r, c + 1]);
        }
    }

    return result;
};