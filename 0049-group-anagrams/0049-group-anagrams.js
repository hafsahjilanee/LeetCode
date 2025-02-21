/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = new Map();

    for (let str of strs) {
        let sortedStr = str.split('').sort().join('');

        map.set(sortedStr, [...(map.get(sortedStr)||[]),str]);
    }
    
    let res = [];
    for (let [key,values] of map) {
        res.push(values);
    }

    return res;
};