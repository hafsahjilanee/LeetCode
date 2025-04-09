/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    
    let wordA = word1.join("");
    let wordB = word2.join("");

    return wordA === wordB;
};