/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function (strings) {
    //TC O(n*m) where n is # of strings and m is avg length of string
    //SC O(n*m)
    let map = new Map();

    for (const str of strings) {
        if (str.length === 1) map.set("", [...(map.get("") || []), str]);
        else {
            let charDiffs = [];
            let i = 1
            while (i < str.length) {
                //add 26 to handle ba (negative case) where diff will be -1 but we add 26 and then %26
                let diff = (str.charCodeAt(i) - str.charCodeAt(i - 1) + 26) % 26;
                charDiffs.push(diff);
                i++;
            }
            //comma to handle multi digit differences
            let sequence = charDiffs.join(',');
            map.set(sequence, [...(map.get(sequence) || []), str]);
        }
    }

    let res = [];
    for (let key of map.keys()) {
        res.push(map.get(key));
    }

    return res;
};