/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) return [];

    intervals.sort((a,b)=> a[0]-b[0]);

    let res = [intervals[0]];

    for (let i=1; i<intervals.length; i++) {
        let [start, end] = intervals[i];
        let [prevStart, prevEnd] = res[res.length-1];

        if (start <= prevEnd) {
            res[res.length-1] = [prevStart, Math.max(end, prevEnd)];
        }
        else {
            res.push([start, end]);
        }
    }

    return res;
};