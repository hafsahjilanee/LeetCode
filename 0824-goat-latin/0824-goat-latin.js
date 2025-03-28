/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    let arr = sentence.split(' ');
    let vowel = new Set(['a','e','i','o','u', 'A','E','I','O','U']);
    let res = [];
    let newWord = '';

    for (let i=0; i<arr.length; i++) {
        let word = arr[i];
        let firstChar = word[0];
        newWord = '';

        if (vowel.has(firstChar)) {
            newWord = word + 'ma';
        }
        else {
            newWord = word.slice(1) + firstChar + "ma";
        }

        newWord += 'a'.repeat(i+1);
        res.push(newWord);
    }

    return res.join(' ');
};