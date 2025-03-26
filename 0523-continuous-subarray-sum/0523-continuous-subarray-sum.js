/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let prefixMap = new Map();

    prefixMap.set(0,1);

    for (let i=0; i<nums.length; i++) {
        sum+=nums[i]
        
        if (prefixMap.has(sum-k)) {
            return true
        }

        prefixMap.set(sum, (prefixMap.get(sum)||0)+1);
    }

    return false;
};