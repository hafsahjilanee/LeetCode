/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    //tc o(n)
    //sc o(n)
    let map = new Map();
    let count = 0;

    for (let i=0; i<nums.length; i++) {
        let complement = k-nums[i];

        if (map.get(complement)>0) {
            map.set(complement, map.get(complement) - 1);
            count++;
        }
        else {
            map.set(nums[i], (map.get(nums[i]) || 0) +1);
        }
    }

    return count;
};