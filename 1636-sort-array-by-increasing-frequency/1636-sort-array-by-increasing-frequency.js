/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1);
        }
        else {
            map.set(num,1);
        }
    }
    
    let sortedByValues = new Map([...map.entries()].sort((a,b)=>
    {
        if (a[1] !== b[1]) { //if freq is not same sort by inc/asc order i.e -1
            return a[1] - b[1];
        }
        else { //if freq is same sort by dec/asc order
               //1 is asc, -1 is desc
            return b[0] > a[0] ? 1 : -1;
        }
    }));

    let res = [];
    let count = 0
    for (const [key,value] of sortedByValues) {
        while (count<value) {
            res.push(key);
            count++;
        }
        count = 0;
    }

    return res;
};