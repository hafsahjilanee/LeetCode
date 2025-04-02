/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    //TC On(log n)
    //SC O(1)
    let nearest = -Infinity;
    let map = new Map();
    let sortedNums = nums.sort((a,b)=> a-b);

    let left =0;
    let right =sortedNums.length -1;

    while (left<right) {
        let sum = sortedNums[left] + sortedNums[right];

        if (sum<k) {
            nearest = Math.max(nearest, sum);
            left++;
        }
        else{
            right--;
        }
    }
    return nearest === -Infinity? -1: nearest;
};