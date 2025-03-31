/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    if (!word1.length) return word2;
    if (!word2.length) return word1;

    let i = 0;
    let j = 0;
    let res = [];
    while (i<word1.length && j<word2.length) {
        res.push(word1[i], word2[j]);
        i++;
        j++;
    }

    while (i<word1.length) {
        res.push(word1[i]);
        i++;
    };

    while (j<word2.length) {
        res.push(word2[j]);
        j++;
    }

    return res.join('');
};