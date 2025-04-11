/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    //TC O(n)
    //SC O(1)
    let left = 0;
    let right = nums.length-1;
    let sum = 0;
    let maxAverage = -Infinity;

    for (let right=0; right<nums.length; right++) {
        sum+=nums[right];

        if (right-left+1 === k) {
            maxAverage = Math.max(maxAverage, sum/k);
            sum -= nums[left];
            left++;
        }
    }

    return maxAverage;
};