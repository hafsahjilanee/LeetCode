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
    let result = [];
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result.push(word1[i++]);
        }
        if (j < word2.length) {
            result.push(word2[j++]);
        }
    }
    
    return result.join('');
};