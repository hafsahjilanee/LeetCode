/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    //two pointer solution
    let left =0;
    let right=nums.length -1;
    let index = nums.length-1;
    let res = new Array(nums.length)

    while (left<=right) {
        if (Math.abs(nums[left])>Math.abs(nums[right])) {
            res[index] = nums[left] * nums[left];
            left++;
        }
        else {
            res[index] = nums[right] * nums[right];
            right--;
        }
        index--;
    }

    return res;

};