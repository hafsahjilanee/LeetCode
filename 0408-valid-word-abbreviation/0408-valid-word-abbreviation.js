/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    //TC O(n)
    //SC 0(1)
    let wordPtr = 0;
    let abbrPtr = 0;

    if (abbr.length > word.length) return false;

    while (wordPtr<word.length || abbrPtr<abbr.length) {
        if (!isNaN(abbr[abbrPtr])) {
            let steps = 0;

            //leading 0s are not allowed
            if (abbr[abbrPtr] === '0') {
                return false
            }

            while (abbrPtr< abbr.length && !isNaN(abbr[abbrPtr])) {
                steps = steps*10 + parseInt(abbr[abbrPtr]);
                abbrPtr++;
            }

            wordPtr += steps;
            continue;
        }
        else if (abbr[abbrPtr] !== word[wordPtr]) {
            return false;
        }
        abbrPtr++;
        wordPtr++;
    }

    return wordPtr === word.length && abbrPtr === abbr.length;
};