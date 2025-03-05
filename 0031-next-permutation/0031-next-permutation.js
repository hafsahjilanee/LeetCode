/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums.length) return [];
    let pivot = -1;
    //find pivot
    for (let right=nums.length; right>=0; right--) {
        //14587
        if (nums[right]>nums[right-1]) {
            pivot = right-1;
            break;
        }
    }

    //if no pivot found 321 => 123
    if (pivot===-1) {
        nums.reverse();
        return;
    }

    //swap with first number greater than pivot
    for (let right=nums.length; right>pivot; right--) {
        //14587 => 14785
        if (nums[right]> nums[pivot]) {
            [nums[right], nums[pivot]] = [nums[pivot],nums[right]];
            break;
        }
    }

    //swap all numbers after the pivot index
    let left = pivot+1, right=nums.length-1;
    while (left<right) {
        [nums[left],nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};