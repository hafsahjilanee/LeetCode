/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let sortedNums = nums.sort((a,b)=> a-b);
    let left, right, sum;
    let res = [];
    for (let i=0; i<nums.length-3; i++) {
        
        if (i>0 && sortedNums[i]===sortedNums[i-1]) continue;

        for (let j=i+1; j<nums.length-2; j++) {
            //left should be j+1 and not i+1
            left = j+1;
            right=nums.length-1;

            if (j>i+1 && sortedNums[j]===sortedNums[j-1]) continue;

            while (left<right) {
                sum = sortedNums[i] +sortedNums[j] + sortedNums[left] + sortedNums[right];

                if (sum>target) {
                    right--;
                }
                else if (sum<target) {
                    left++;
                }
                else {
                    res.push([sortedNums[i],sortedNums[j],sortedNums[left],sortedNums[right]]);

                    while (left<right && sortedNums[left]===sortedNums[left+1]) left++;
                    while (left<right && sortedNums[right]===sortedNums[right-1]) right--;

                    left++;
                    right--;
                }
            }
        }
    }

    return res;
};