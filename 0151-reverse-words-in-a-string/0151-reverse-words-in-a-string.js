/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();

    let words = s.split(' ');
    let res = [];

    for (let i=words.length-1; i>=0; i--) {
        if (words[i]==='') continue;
        res.push(words[i]);
    }

    return res.join(' ');
};