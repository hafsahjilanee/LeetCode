/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //modify nums in place
    //use O(1) space
    //TC O(n)

    if (!nums.length) return 0;

    let lastDuplicateIndex = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[lastDuplicateIndex]) {
            lastDuplicateIndex++;
            nums[lastDuplicateIndex] = nums[i]; // Overwrite the next position with the unique element
        }
    }
    return lastDuplicateIndex + 1; // Number of unique elements
};