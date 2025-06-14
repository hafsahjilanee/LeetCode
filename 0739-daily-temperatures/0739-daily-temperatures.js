/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [[0, temperatures[0]]];
    let res = new Array(temperatures.length).fill(0);

    for (let i=1; i<temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][1]) {
            let [idx, temp] = stack.pop();
            res[idx] = i - idx; // Days to wait
        }


        stack.push([i, temperatures[i]]);
    }

    return res;
};