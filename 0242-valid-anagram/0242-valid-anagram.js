/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let s1 = new Map();

    for (let char of s) {
        s1.set(char, (s1.get(char)||0) + 1);
    }

    let t1= new Map();
    for (let char of t) {
        t1.set(char, (t1.get(char)||0) + 1);
    }

    for (const char of s) {
        if (s1.get(char) === t1.get(char)) {
            continue;
        }
        else {
            return false;
        }
    }

    return true;
};