/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0;
    let close = 0;
    let s1 = s.split('');
    let res = [];

    //forward pass to check no closing bracket before opening bracket ))((
    for (const char of s1) {
        if (char === '(') {
            open++;
        }
        else if (char === ')') {
            if (open===0) continue;
            open--;
        }
        res.push(char);
    }

    let result = [];

    //backward pass to check for opening brackets
    for (let i=res.length-1; i>=0; i--) {
        if (res[i] === '(') {
            if (close === 0) continue;
            close--;
        }
        else if (res[i] === ')') {
            close++;
        }
        
        result.push(res[i]);
    }

    return result.reverse().join('');
};