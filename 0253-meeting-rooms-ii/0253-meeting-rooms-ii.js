/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    //TC n log n bc of sorting
    //SC O(n)
    let startTimes = intervals.map((e)=> e[0]).sort((a,b)=>a-b);
    let endTimes = intervals.map((e)=> e[1]).sort((a,b)=>a-b);

    let e = 0;
    let rooms = 0;

    for (let i=0; i<startTimes.length; i++) {
        if (startTimes[i]< endTimes[e]) {
            rooms++;
        }
        else {
            e++;
        }
    }

    return rooms;
};