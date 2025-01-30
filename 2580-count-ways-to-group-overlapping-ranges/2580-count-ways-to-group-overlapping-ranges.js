/**
 * @param {number[][]} ranges
 * @return {number}
 */
var countWays = function(ranges) {
    const ROWS = ranges.length, COLS=ranges[0].length;
    let sorted = ranges.sort((a,b) => a[0]-b[0]);
    console.log(sorted);
    let merged = [];

    for (let interval of sorted) {
        //if list is empty or first coordinate of interval is greater than last coordinate of merged that means no overlap hence push as is
        if (merged.length === 0 || merged[merged.length-1][1]<interval[0]) {
            merged.push(interval)
        }
        else {
        //update last coordinate of merged with max of merged max or interval max
            merged[merged.length-1][1] = Math.max(merged[merged.length-1][1], interval[1]);
        }
    }

console.log("merged", merged.length);
    return Number(BigInt(2) ** BigInt(merged.length) % BigInt(1000000007));
};