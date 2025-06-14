/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !==0) return false;

    let closing = new Set([']','}',')']);

    let brackets = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }

    let stack = [];

    for (let char of s) {
        if (closing.has(char) && stack.length) {
            if (stack[stack.length-1] === brackets[char]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
            stack.push(char);
        }
    }

    return stack.length ? false: true;
};