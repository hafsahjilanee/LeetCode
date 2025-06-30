/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    let closingSet = new Set(['}', ')', ']'])

    let stack = [];

    for (let char of s) {
        if (closingSet.has(char) && stack.length
            && stack[stack.length - 1] === brackets[char]) {
            stack.pop();
        }
        else {
            stack.push(char)
        }
    }

    return stack.length ? false : true;
};