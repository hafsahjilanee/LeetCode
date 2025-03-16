/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let res = [];

    let first = bSearch(nums,0, target, true);
    if (first === -1) return [-1, -1];

    let last = bSearch(nums,first+1,target, false);

    return last!==-1 ? [first, last] : [first, first];
};

var bSearch = function (nums, left, target, isFirst) {
    let right = nums.length-1;
    let bound = -1;
    while (left <= right) { //we keep <= bc we need to check occurrences where left===right to avoid skipping elements
        let mid = Math.floor((left + right) / 2);

        if (target > nums[mid]) {
            left = mid + 1;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            bound = mid
            if (isFirst) right = mid -1 //if first occurrence move right to find lowest index
            else left = mid +1; //otherwise move mid to get last occurrence

        }
    }
    return bound;
}