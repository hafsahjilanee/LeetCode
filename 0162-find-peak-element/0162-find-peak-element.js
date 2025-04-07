/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //TC Olog n
    //SC O(1)
    let left = 0;
    let right = nums.length-1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);

        if (nums[mid]<nums[mid+1]) {
            left = mid+1;
        }
        else {
            right = mid;
        }
    }

    return left;
};