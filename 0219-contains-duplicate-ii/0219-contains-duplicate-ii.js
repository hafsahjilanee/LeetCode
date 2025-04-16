/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    //TC O(n)
    //SC O(n)

    //keep window size as k
    let window = new Set();
    let left = 0;

    for (let right=0; right<nums.length; right++) {
        if (right-left  > k) {
            window.delete(nums[left]);
            left++; 
        }

        if (window.has(nums[right])) return true;

        window.add(nums[right]);
    }

    return false; 
};