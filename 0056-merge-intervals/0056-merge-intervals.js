/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (!intervals.length) return [];

    intervals = intervals.sort((a,b) => a[0]-b[0]);
    let merged = [intervals[0]];

    for (let i = 1; i< intervals.length; i++) {
        let [prevStart, prevEnd] = merged[merged.length-1];
        let [start, end] = intervals[i];

        if (start<=prevEnd ) {
            merged[merged.length-1][1] = Math.max(prevEnd, end);
        }
        else {
            merged.push([start, end]);
        }
    }

    return merged;
};