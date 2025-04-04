/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    if (!nums.length) return [[lower,upper]];

    let missingRanges = [];

    if (lower < nums[0]) {
        missingRanges.push([lower, nums[0]-1]);
    }
    for (let i=1; i<nums.length; i++) {
        let low = Infinity;
        let high = Infinity;
        if (Math.abs(nums[i]-nums[i-1]) !== 1) {
            low = nums[i-1] +1;
            high = nums[i] - 1;
            missingRanges.push([low,high]);
        }
    }
    if (upper>nums[nums.length-1]) {
        missingRanges.push([nums[nums.length-1]+1, upper]);
    }
 return missingRanges;
};