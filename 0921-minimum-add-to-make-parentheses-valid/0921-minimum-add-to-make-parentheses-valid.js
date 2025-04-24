/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {

    let open =0;
    let close = 0;
    for (let char of s) {
        if (char === '(') {
            close++;
        }
        else if (char === ')') {
            if (close) close--;
            else open++
        }
    }

    return open+close;
};