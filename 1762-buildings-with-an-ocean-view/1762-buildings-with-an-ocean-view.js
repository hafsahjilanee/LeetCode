/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let max = 0;
    let res = [];

    for (let right=heights.length-1; right>=0; right--) {
        if (heights[right]> max) {
            res.push(right);
        }

        max = Math.max(max, heights[right]);
    }

    return res.reverse();
};