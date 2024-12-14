/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low= 0;
    let high = nums.length-1;
    let middle;
    
    while (low<=high) {
        middle = Math.floor((low+high)/2);
        
        if(target>nums[middle]) {
            low = middle + 1;
        }
        else if (target<nums[middle]) {
            high = middle -1;
        }
        else {
            return middle;
        }
    }
    return -1;
};