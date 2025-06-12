/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();

    for (let char of s) {
        map.set(char, (map.get(char)||0)+1);
    }

    let sortedEntries = [...map.entries()].sort((a,b) => b[1]-a[1]);

    let res = '';
    for (let [char, freq] of sortedEntries) {
        let i = 0;
        while (i<freq) {
            res+= char;
            i++;
        }
    }

    return res;
};