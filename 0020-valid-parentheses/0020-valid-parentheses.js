/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    const closingBrackets = [')', ']', '}'];

    if (s.length % 2 !==0) {
        return false;
    }

    let stack = [];

    for (let i=0; i<s.length; i++) {
        if (closingBrackets.includes(s[i])) {
            if (stack.pop() !== obj[s[i]]) {
                return false
            }
            else {
                continue;
            }
        }
        stack.push(s[i]);
    }

    return stack.length ? false: true;
};