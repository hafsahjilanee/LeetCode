/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let writeIdx = 0;

    // for (let i=0; i<nums.length;i++) {
    //     if (nums[i] !==0) {
    //         nums[writeIdx++] = nums[i];
    //     }
    // }

    // for (let i=writeIdx; i<nums.length;i++) {
    //     nums[i] = 0;
    // }

    //one pass solution
    let index = 0;
    for (let i = 0; i <nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap without zeroing immediately
            [nums[index], nums[i]] = [nums[i], nums[index]];
            index++;
        }
    }
};