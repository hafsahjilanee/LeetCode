/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    //TC O(n)
    //SC O(n)

    //each index in exec time corresponds to indes of func
    let executionTimes = new Array(n).fill(0);

    let callStack = [];
    let prevStartTime = 0;

    for (let log of logs) {
        let [id, type, ts] = log.split(":");

        id = parseInt(id);
        ts = parseInt(ts);

        if (type==="start") {
            if (callStack.length) {
                let functionId = callStack[callStack.length-1];
                executionTimes[functionId] += ts-prevStartTime;
            }
            callStack.push(id);
            prevStartTime = ts;
        }
        else {
            let functionId = callStack.pop();
            executionTimes[functionId] += ts-prevStartTime+1;
            prevStartTime = ts+1;
        }
    }

    return executionTimes;
};