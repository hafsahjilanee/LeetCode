/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    let res = [];
    let maxBuilding = -Infinity;

    for (let i=heights.length-1; i>=0; i--) {
        if (heights[i] > maxBuilding) {
            res.push(i);
        }

        maxBuilding = Math.max(maxBuilding, heights[i]);

    }

    return res.reverse();
};