/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    if (!nums.length) {
        return 0;
    }

    let prefixMap = new Map();

    //for the case that an element in itself is the solution, or the array from the beginning to a particular index is the solution
    prefixMap.set(0,1)

    let currSum = 0; 
    let count = 0;

    for (let num of nums) {
        currSum+= num;

        if (prefixMap.has(currSum-k)) {
            count = prefixMap.get(currSum-k)+1;
        }
        prefixMap.set(currSum, (prefixMap.get(currSum)||0)+1);
    }

    return count;
};