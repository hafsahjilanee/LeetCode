/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let close = 0;
    let open = 0;

    for (let char of s) {
        if (char === '(') close++;
        else if (char === ')') {
            if (close > 0) {
                close--;
                continue;
            }
            open++;
        }
    }

    return close+open;
};