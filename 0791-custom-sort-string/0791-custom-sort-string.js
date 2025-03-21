/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char)||0)+1);
    }

    let res = '';
    for (let orderItem of order) {
        let freq = map.get(orderItem);
        for (let i=0; i<freq; i++) {
            res+=orderItem;
        }
        map.delete(orderItem);
    }

    // Append remaining characters that are not in `order`
    for (let [char, freq] of map.entries()) {
        for (let i = 0; i < freq; i++) {
            res += char;
        }
    }

    return res;
};