/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;

    while (left<right) {
        if (s[left] !== s[right]) {
            return isPalindrome(s.slice(left+1,right+1)) || isPalindrome(s.slice(left,right));
        }
        left++;
        right--;
    }
    return true;
};

var isPalindrome = function(word) {
    let left = 0;
    let right = word.length-1;

    while (left<right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}