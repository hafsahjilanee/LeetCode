/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left =0;
    let right = s.length-1;

    //abeeea
    //abc

    while (left<right) {
        if (s[left] !== s[right]) {
            //in slice the last index is not included so we do right+1
            return isPalindrome(s.slice(left+1,right+1)) || isPalindrome(s.slice(left,right));
        }
        left++;
        right--;
    }

    return true;
};

var isPalindrome = function(str) {
    let left=0;
    let right=str.length-1;

    while (left<right) {
        if (str[left] !== str[right]) {
            return false; 
        }
        left++;
        right--;
    }
    return true;
}