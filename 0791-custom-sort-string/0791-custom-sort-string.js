/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    // Time Complexity: O(N)
    // Space Complexity: O(N)
    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let res = '';
    for (let o of order) {
        let freq = map.get(o);
        for (let i = 0; i < freq; i++) {
            res += o;
        }
        map.delete(o);
    }

    //add remaining chars
    for (let [char, freq] of map) {
        for (let i = 0; i < freq; i++) {
            res += char;
        };
        map.delete(char);
    }

    return res;
};