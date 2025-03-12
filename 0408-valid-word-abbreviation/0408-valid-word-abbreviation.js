/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    let wordPtr = 0;
    let abbrPtr = 0;
    let steps = 0;

    while (wordPtr<word.length && abbrPtr<abbr.length) {
        if (!isNaN(abbr[abbrPtr])) {
            steps = 0;

            if (abbr[abbrPtr] === '0') return false;
            
            while (abbrPtr<abbr.length && !isNaN(abbr[abbrPtr])) {
                steps = steps*10 + Number(abbr[abbrPtr]);
                abbrPtr++;
            }
            
            wordPtr+= steps;
        }
        else {
            if (abbr[abbrPtr] !== word[wordPtr]) return false

            abbrPtr++;
            wordPtr++;
        }
    }

    return wordPtr === word.length && abbrPtr === abbr.length;
};