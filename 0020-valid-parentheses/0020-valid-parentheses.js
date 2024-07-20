/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];
    
    let map = {
        '}': '{',
        ']': '[',
        ')':'(',
    }
  
    if (s.length % 2 === 1) {
        return false;
    }

    arr.push(s[0]);
    for (let i=1; i<s.length; i++) {
        if (arr.length && arr[arr.length -1] === map[s[i]]) {
            arr.pop();
            continue;
        }
        else {
            arr.push(s[i]);
        }
    }
    
    return arr.length === 0;
};
