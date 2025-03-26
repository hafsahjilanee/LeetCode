/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (!intervals.length) return [];

    let sortedIntervals = intervals.sort((a,b)=> a[0] - b[0]);
    let res = [sortedIntervals[0]];

    for (let i =1; i<sortedIntervals.length; i++) {
        //[2,6], [5,8]
        let [start, end] = sortedIntervals[i];
        //[1,3]
        let [prevStart, prevEnd] = res[res.length-1];

        if (start <= prevEnd) {
            res[res.length-1] = [prevStart, Math.max(end, prevEnd)];
        }
        else {
            res.push([start,end]);
        }
    }

    return res;
};