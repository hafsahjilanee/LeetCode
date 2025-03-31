/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //TC On log n bc of sorting
    //SC O(n) bc of results array
    if (!intervals.length) return [];

    intervals.sort((a,b)=> a[0]-b[0]);
    let res = [intervals[0]];

    for (let i=1; i<intervals.length; i++) {
        let [start, end] = intervals[i];
        let [prevStart, prevEnd] = res[res.length-1];

        //[1,3] res
        //[2,6] intervals[1]
        if (start<=prevEnd) {
            res[res.length-1] = [prevStart, Math.max(prevEnd, end)];
        }
        else {
            res.push([start,end]);
        }
    }

    return res;
};