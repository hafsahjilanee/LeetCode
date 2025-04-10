/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    let startTimes = intervals.map((e)=> e[0]).sort((a,b)=>a-b);
    let endTimes = intervals.map((e)=> e[1]).sort((a,b)=>a-b);

    let s = 0;
    let e = 0;
    let count = 0;
    let res = 0;

    while (s<startTimes.length) {
        if (startTimes[s]< endTimes[e]) {
            s++;
            count++;
        }
        else {
            e++;
            count--
        }

        res =Math.max(res, count);
    }

    return res;
};