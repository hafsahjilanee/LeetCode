/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function(nums, k) {
    let left = 0;
    let right = nums.length -1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        let missing = nums[mid] - (mid+nums[0]);

        if (k>missing) {
            left = mid+1;
        }
        else {
            right = mid -1;
        }
    }

    return left+nums[0]+k -1;
};