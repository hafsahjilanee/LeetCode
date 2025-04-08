/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    //n log n TC
    //n SC
    const starts = intervals.map(interval => interval[0]).sort((a, b) => a - b);
    const ends = intervals.map(interval => interval[1]).sort((a, b) => a - b);

    let res = 0;
    let count = 0;

    let s = 0;
    let e = 0;

    while (s < intervals.length) {
        if (starts[s] < ends[e]) {
            s++;
            count++;
        }
        else {
            e++;
            count--;
        }

        res = Math.max(res, count);
    }

    return res;
};