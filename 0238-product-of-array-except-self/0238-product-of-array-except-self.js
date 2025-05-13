/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (!nums.length) return [];

    let prefix = [];
    let postfix = [];
    let res = 1;

    for (let i = 0; i < nums.length; i++) {
        res *= nums[i];
        prefix[i] = res;
    }
    res = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        res *= nums[i];
        postfix[i] = res;
    }

    let output = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) output[i] = postfix[i + 1]
        else if (i === nums.length - 1) output[i] = prefix[i - 1];
        else {
            output[i] = prefix[i - 1] * postfix[i + 1];
        }
    }

    return output;
};