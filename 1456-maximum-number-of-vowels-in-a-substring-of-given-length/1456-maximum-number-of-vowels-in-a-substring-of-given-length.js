/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let count = 0;

    let vowels = new Set(['a','e','i','o','u']);
    for (let i=0; i<k; i++) {
        if (vowels.has(s[i])) count++;
    }
    let maxVowels = count;
    for (let i=k; i<s.length; i++) {
        if (vowels.has(s[i])) count++;
        if (vowels.has(s[i-k])) count--;

        maxVowels = Math.max(maxVowels, count);
    }

    return maxVowels;
};