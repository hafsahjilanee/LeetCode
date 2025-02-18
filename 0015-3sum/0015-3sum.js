/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let sortedNums = nums.sort((a,b) => a-b);
    
    let result = [];

    let left;
    let right;
    let sum;
    for (let i=0; i<sortedNums.length-1; i++) {
        left = i+1;
        right = nums.length-1;

        //skipping for duplicate i values that are processed
        //left and i can have same values e.g [-1,-1,2] i=-1(idx 0) & left=-1(idx 1)
        if (i>0 && sortedNums[i] === sortedNums[i-1]) continue;

        while (left<right) {
            sum = sortedNums[left] + sortedNums[right] + sortedNums[i];

            if (sum>0) {
                right--;
            }
            else if (sum<0) {
                left++;
            }
            else {
                result.push([sortedNums[left],sortedNums[right],sortedNums[i]]);
                //increment left one more time if new left val is same as old val
                while (left<right && sortedNums[left] === sortedNums[left+1]) left++;

                //decrement right one more time if new right val is same as old val
                while (left<right && sortedNums[right] === sortedNums[right-1]) right--;

                //move past the duplicate value
                left++;
                right--;
            }
        }
    }

    return result;
};