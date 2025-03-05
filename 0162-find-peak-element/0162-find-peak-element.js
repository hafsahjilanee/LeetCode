/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    //time for binary search is O(log n)
    //space since we're not using any complex data structures O(1)
    let left = 0;
    let right = nums.length-1;
    let middle;

    //are we part of an increasing sequence, move to the right
    //binary search
    while (left < right) {  
        let middle = Math.floor((left + right) / 2);

        //checks whether we are part of an increasing sequence
        //if so increase the left, bc peak must be on the right
        if (nums[middle] < nums[middle + 1]) {
            left = middle + 1;
        } else {
        //else if we are part of a decreasing sequence then peak must be on the left
            right = middle;
        }
    }

    return left; 
};