/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum = new Array(nums.length).fill(0);
    let rightSum = new Array(nums.length).fill(0);
    let sum = 0;

    for (let i=1; i<nums.length; i++) {
        sum+=nums[i-1];
        leftSum[i] = sum;
    }

    sum=0;
    for (let i=nums.length-2; i>=0; i--) {
        sum+= nums[i+1];
        rightSum[i] = sum;
    }

    for (let i=0; i<nums.length;i++) {
        if (leftSum[i] === rightSum[i]) return i;
    }

    return -1;
};