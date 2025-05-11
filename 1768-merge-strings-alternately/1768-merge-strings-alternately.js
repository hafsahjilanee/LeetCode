/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0;
    let j = 0;
    let res = [];

    while (i<word1.length || j<word2.length) {
        if (i<word1.length) {
            res.push(word1[i++]);
        }
        if (j<word2.length) {
            res.push(word2[j++]);
        }
    }

    return res.join('');
};