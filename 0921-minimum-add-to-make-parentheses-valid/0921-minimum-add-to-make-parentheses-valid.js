/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {

    let open = 0;
    let close = 0;
    for (let char of s) {
        if (char === '(') close++;
        else {
            if (close>0) {
                close--;
                continue;
            }
            open++;
        }
    }

    return open+close;
};