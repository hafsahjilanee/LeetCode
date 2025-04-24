/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    //tc Olog n
    //sc O(1)
    let first = bSearch(nums, 0, target, true);
    if (first === -1) return [-1, -1];

    let last = bSearch(nums, first, target, false);

    return [first, last];
};

var bSearch = function (nums, left, target, isFirst) {
    let right = nums.length - 1;
    let bound = -1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target > nums[mid]) {
            left = mid + 1;
        }
        else if (target < nums[mid]) {
            right = mid - 1;
        }
        else {
            bound = mid;
            if (isFirst) right = mid - 1;
            else left = mid + 1;
        }
    }

    return bound;
}