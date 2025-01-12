/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let letters = [];

    for (const char of s) {
        if (letters.includes(char)) {
            return char;
        }
        else {
            letters.push(char);
        }
    }
};