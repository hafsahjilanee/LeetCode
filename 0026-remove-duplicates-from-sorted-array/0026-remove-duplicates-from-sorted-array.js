/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
let count = 1;
 for (let i=0; i<nums.length-1;){
   if (nums[i] !== nums[i+1]){
     count++;
     i++;
   }
   else if (nums[i] === nums[i+1]){
     nums.splice(i+1,1);
   }
 }
 return count;
};