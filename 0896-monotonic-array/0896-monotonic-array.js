/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    if (nums.length <= 2) return true;

    let isIncreasing = nums[1] - nums[0] > 0 ? true : false;

    let i = 2;
    while (i < nums.length) {
        if (isIncreasing) {
            if (nums[i] - nums[i - 1] >= 0) {
                i++;
            }
            else {
                return false;
            }
        }
        else {
            if (nums[i] - nums[i - 1] <= 0) {
                i++;
            }
            else {
                return false;
            }
        }
    }

    return true;
};