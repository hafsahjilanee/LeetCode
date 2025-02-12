/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sortedNums = nums.sort((a,b)=> a-b);

    if (nums[0] !== 0) {
        return 0;
    }
    console.log(sortedNums);
    let temp = 0;
    for (let i=0; i< sortedNums.length; i++) {
        if (sortedNums[i] === temp) {
            temp+=1;
            continue;
        }
        else {
            return temp;
        }
    }
    return temp++;
};