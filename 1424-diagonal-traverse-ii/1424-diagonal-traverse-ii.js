/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    if (!nums) return [];
    let q = [];
    //push first element
    q.push([0,0]);
    let res = [];

    while (q.length) {
        let [r,c] = q.shift();

        res.push(nums[r][c]);

        if (c===0 && r+1<nums.length) {
            q.push([r+1,c]);
        }
        if (c+1 <nums[r].length) {
            q.push([r, c+1]);
        }
    }

    return res;
};