/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length!==word2.length) return false;

    const count = str => {
        const map = new Map();
        for (let ch of str) map.set(ch, (map.get(ch) || 0) + 1);
        return map;
    };

    const map1 = count(word1);
    const map2 = count(word2);

    const keys1 = [...map1.keys()].sort().join('');
    const keys2 = [...map2.keys()].sort().join('');
    if (keys1 !== keys2) return false;

    const freq1 = [...map1.values()].sort((a, b) => a - b);
    const freq2 = [...map2.values()].sort((a, b) => a - b);
    return freq1.every((v, i) => v === freq2[i]);
};