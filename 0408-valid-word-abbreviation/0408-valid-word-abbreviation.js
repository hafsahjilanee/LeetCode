/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    //space O(N) space
    //O(1) time

    let wordPtr = 0;
    let abbrPtr = 0;
    let steps = 0;
    if (word.length < abbr.length) {
        return false;
    }

    while (wordPtr < word.length && abbrPtr < abbr.length) {
        if (!isNaN(abbr[abbrPtr])) {
            steps = 0;
            if (abbr[abbrPtr] === '0') {
                return false;
            }
            while (abbrPtr < abbr.length && !isNaN(abbr[abbrPtr])) {
                steps = steps*10 + Number(abbr[abbrPtr]);
                abbrPtr++;
            }

            wordPtr += steps;
        }
        else {
            if (word[wordPtr] !== abbr[abbrPtr]) {
                return false;
            }
            wordPtr++;
            abbrPtr++;
        }
    }
    return wordPtr === word.length && abbrPtr === abbr.length;
};