/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //TC AND SC O(n) for both
    let map = new Map();
    let res = [];

    for (let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            res.push(i);
            res.push(map.get(complement));
            return res;
        }
        map.set(nums[i], i);
    }

    return [];
};