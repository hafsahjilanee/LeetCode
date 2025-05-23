/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //tc o(n)
    //sc 0(1)
    let left = 0;
    let right = s.length-1;

    while (left<right) {
        while (left<right && !isLetter(s[left])) {
            left++;
        }

        while (left<right && !isLetter(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
};

var isLetter = function (char) {
    let regex = /^[a-zA-Z0-9]$/;
    return regex.test(char);
}