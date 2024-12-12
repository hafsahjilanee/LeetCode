/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {   
    let count = {0:0, 1:0, 2:0};
    
    for (let i=0; i<nums.length; i++) {
        count[nums[i]] +=1
    }
    
    // console.log(Object.keys(count).length)
    
    let k =0;
    for (let i=0; i<Object.keys(count).length; i++) {
        let freq = count[i];
        for (let j=0; j<freq; j++) {
            nums[k] = i
            k++;
        }
    }
    
};