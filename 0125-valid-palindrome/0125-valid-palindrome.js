/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;

    while (left<right) {
        if (!isLetter(s[left])) {
            left++;
            continue;
        }
        else if (!isLetter(s[right])) {
            right--;
            continue;
        }

        if (s[left].toLowerCase() === s[right].toLowerCase()) {
            left++;
            right--;
            continue;
        }
        else {
            return false;
        }
    }

    return true;
};

function isLetter(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}