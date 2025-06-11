/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    let rotatedWord = s;

    for (let i=0; i<s.length; i++) {
        rotatedWord = rotateOnce(rotatedWord)

        if (rotatedWord === goal) return true;
    }

    return false;
};

var rotateOnce = function(word) {
    let char = word[0];
    word = word.slice(1);
    word += char;
    return word;
}