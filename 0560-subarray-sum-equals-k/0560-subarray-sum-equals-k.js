/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    
    let prefixMap = new Map();
    prefixMap.set(0,1);
    let sum = 0;
    let count=0;

    for (let num of nums) {
        sum+= num;

        if (prefixMap.has(sum-k)) {
            count += prefixMap.get(sum-k);
        }

        prefixMap.set(sum, (prefixMap.get(sum)||0) +1);
    }

    return count;
};