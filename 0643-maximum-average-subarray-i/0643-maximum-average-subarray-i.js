/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i=0; i<k; i++) {
        sum+= nums[i];
    }
    let avg = sum/k;

    for (let i=k; i<nums.length; i++) {
        sum+=nums[i]-nums[i-k]
        avg = Math.max(avg, sum/k);
    }

    return avg;

};