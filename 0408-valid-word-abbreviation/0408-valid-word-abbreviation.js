/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    //in the worst case the abbr will be the same length as word so 0(N) time
    //O(1) no data structures

    if (abbr.length > word.length) {
        return false;
    }

    let wordPointer = 0;
    let abbrPointer = 0;
    let steps = 0;


    while (wordPointer < word.length && abbrPointer < abbr.length) {
        if (!isNaN(abbr[abbrPointer])) {
            //get the entire number but first check for leading zeros
            if (abbr[abbrPointer]==="0") {
                return false;
            }

            while (abbrPointer<abbr.length && !isNaN(abbr[abbrPointer])) {
                steps = steps*10 + Number(abbr[abbrPointer]);
                abbrPointer++;
            }
            wordPointer +=steps;
            steps=0;
        }
        else {  // If it's a character
            if (word[wordPointer] !== abbr[abbrPointer]) {
                return false;
            }
            wordPointer++;
            abbrPointer++;
        }
    }
    
    //make sure the entire abbr and word is parsed
    return abbrPointer === abbr.length && wordPointer === word.length;
};