/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map();
    let complement =0;
    let result = [];
    for (let i=0; i<nums.length; i++) {
        complement = target - nums[i];
        if (map.has(complement)) {
            result.push(i);
            result.push(map.get(complement));
            return result;
        }
        
        map.set(nums[i], i);
    }
};