/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let left = 0;
    let sum = 0;
    let max = -Infinity;

    for (let right=0; right<nums.length; right++) {
        sum+=nums[right];

        if (sum>max) {
            max = sum;
        }

        if (sum<0) {
            sum = 0
        }

    }

    return max;
};