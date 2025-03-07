/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left =0;
    let right = nums.length-1;
    let middle;

    while (left<right) {
        middle = Math.floor((left+right)/2);
        //part of an incr sequence so the peak must be on the right
        if (nums[middle]<nums[middle+1]) {
            left = middle+1;
        }
        else {
            right=middle;
        }
    }

    return left;
};