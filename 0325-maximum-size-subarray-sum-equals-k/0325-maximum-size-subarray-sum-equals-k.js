/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let prefixSum = new Map();
    prefixSum.set(0,-1);
    let sum = 0;
    let maxLen = 0;

    for (let i=0; i<nums.length; i++) {
        sum+= nums[i];

        if (prefixSum.has(sum-k)) {
            maxLen = Math.max(maxLen, i - prefixSum.get(sum-k));
        }
        
        if (!prefixSum.has(sum)) {
            prefixSum.set(sum, i);
        }

    }
    return maxLen;
};