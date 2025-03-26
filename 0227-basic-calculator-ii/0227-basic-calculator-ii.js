/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let str = s.trim();
    let curr_operation = '+';
    let res = 0;
    let prev = 0;

    for (let i=0; i<str.length; i++) {
        if (str[i] === ' ') continue;
        if (!isNaN(str[i])) {
            let number =0;
            //extract the entire number
            while (i < str.length && str[i] !== ' ' && !isNaN(str[i])) {
                number = number*10 + parseInt(str[i]);
                i++;
            }
            i--;

            if (curr_operation === '+') {
                res += number;
                prev = number;
            }
            else if (curr_operation === '-') {
                res -= number;
                prev = -number;

            }
            else if (curr_operation === '*') {
                res -= prev;
                prev = prev*number;
                res += prev;
            }
            else if (curr_operation === '/') {
                res -=prev;
                prev = Math.trunc(prev/number);
                res += prev;
            }
        }
        else {
            curr_operation = str[i];
        }
    }

    return res;
};