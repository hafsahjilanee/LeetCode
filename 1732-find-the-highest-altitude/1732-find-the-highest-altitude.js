/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let start = 0;
    let max = -Infinity;

    for (let g of gain) {
        start+= g;
        max = Math.max(max, start);
    }

    //starting point is 0 so if max is negative return starting point
    return max>0 ? max: 0;
};