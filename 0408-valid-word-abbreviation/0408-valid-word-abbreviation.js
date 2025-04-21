/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    //tc O(n)
    //sc O(1)
    let wordPtr = 0;
    let abbrPtr = 0;

    while (wordPtr < word.length || abbrPtr < abbr.length) {
        if (!isNaN(abbr[abbrPtr])) {
            let steps = 0;

            //check for leading zeros
            if (abbr[abbrPtr] === '0') return false;

            while (abbrPtr<abbr.length && !isNaN(abbr[abbrPtr])) {
                steps = steps*10 + parseInt(abbr[abbrPtr]);
                abbrPtr++;
            }

            wordPtr += steps;
        }
        else if (word[wordPtr] !== abbr[abbrPtr]) return false;
        else {
            wordPtr++;
            abbrPtr++;
        }  
    }
    return wordPtr === word.length && abbrPtr === abbr.length;
};