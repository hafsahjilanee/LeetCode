/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number[][]}
 */
var findMissingRanges = function(nums, lower, upper) {
    //O(n) tc
    //0(1) excluding missingRanges array
    if (!nums.length) return [[lower,upper]];

    let missingRanges = [];

    if (nums[0]>lower) {
        missingRanges.push([lower,nums[0]-1]);
    }
    let curr = 0;
    for (let i=0; i<nums.length-1; i++) {
        if (nums[i+1]-nums[i] >1) {
            missingRanges.push([nums[i]+1, nums[i+1]-1]);
        }
    }

    if (upper > nums[nums.length-1]) {
        missingRanges.push([nums[nums.length-1]+1, upper]);
    }

    return missingRanges;
};