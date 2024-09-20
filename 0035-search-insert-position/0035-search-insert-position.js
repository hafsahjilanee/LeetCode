/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index=0;
    if (target > nums[nums.length-1]) {
        return nums.length;
    }
    
    if (target < nums[0]) {
        return 0;
    }
    
    if (nums.length === 1) {
        return 0;
    }
    
    for (let i=0; i<nums.length-1; i++){
        console.log('target', target);
        console.log('i', i)
        if (target === nums[i]) {
        return i;
        }
        
        if (i<nums.length-1 && target>=nums[i] && target<=nums[i+1]) {
        return i+1;
        }
        
    }
};