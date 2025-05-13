/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    if (!nums.length) return [];
    const n = nums.length;

    let output = new Array(n);
    let curr = 1;
    output[0] = 1;

    for (let i=0; i<n; i++) {
        //at each i store product of numbers before it
        output[i] = curr;
        curr *= nums[i];
    }

    //do a reverse pass and this time multiply each i with it's postfix
    curr = 1;
    for (let i=n-1; i>=0; i--) {
        output[i] *= curr;
        curr *= nums[i];
    }

    return output;
    
};