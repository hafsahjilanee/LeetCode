/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    let left = 0;
    let right = s.length - 1;
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let str = s.split('');

    while (left < right) {
        while (left < right && !vowels.has(s[left])) {
            left++;
        }
        while (left < right && !vowels.has(s[right])) {
            right--;
        }

        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;

        left++;
        right--;
    }

return str.join('');
};