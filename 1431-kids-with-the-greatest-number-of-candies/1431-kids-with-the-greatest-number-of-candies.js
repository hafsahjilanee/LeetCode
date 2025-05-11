/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = 0;
    for (let i=0; i<candies.length; i++) {
        max = Math.max(max, candies[i]);
    }
    
    let res = [];
    for (let i = 0; i<candies.length; i++) {
        if (candies[i]+ extraCandies >= max) {
            res.push(true)
        }
        else {
            res.push(false);
        }
    }

    return res;
};