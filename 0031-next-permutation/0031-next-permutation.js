/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    //time O(n)
    //space O(1) bc we are swapping in place
    let pivot = -1;

    //find pivot
    //321
    for (let right = nums.length-1; right>0; right--) {
        //14587
        if (nums[right-1] < nums[right]) {
            pivot = right-1;
            break
        }
    }

    if (pivot === -1) {
        nums.reverse();
        return;
    }

    //14587
    for (let right = nums.length-1; right>pivot; right--) {
        //14587 => 14785
        if (nums[right]> nums[pivot]) {
            [nums[right], nums[pivot]] = [nums[pivot], nums[right]];
            break;
        }
    }

    //swap everything after the pivot
    //14785 => 14758
    let left = pivot +1;
    let right = nums.length-1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
     


};