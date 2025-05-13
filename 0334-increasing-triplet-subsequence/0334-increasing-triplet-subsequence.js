/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if (nums.length <3) return false;

    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) first = num
        else if (num <= second) second = num
        else {
            //first and second already exist and this third number is greater than first
            //and second hence we have found inc triplet now
            return true;
        }
    }

    return false;
};