/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let map = new Map();

    for (let num of arr) {
        map.set(num, (map.get(num)||0)+1);
    }

    let set = new Set();

    for (let [key,val] of map) {
        if (set.has(val)) return false;
        set.add(val);
    }

    return true;
};