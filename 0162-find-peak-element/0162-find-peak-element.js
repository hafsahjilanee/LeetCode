/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let middle;

    //are we part of an increasing sequence, move to the right
    //binary search
    //
    while (left < right) {  
        let middle = Math.floor((left + right) / 2);

        if (nums[middle] < nums[middle + 1]) {
            left = middle + 1;
        } else {
            right = middle;
        }
    }

    return left; 
};