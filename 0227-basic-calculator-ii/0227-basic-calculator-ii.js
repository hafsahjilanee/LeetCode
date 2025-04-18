/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    s = s.trim();
    let curr_operation = '+';
    let res = 0;
    let prev = 0;

    for (let i=0;i<s.length; i++) {
        if (s[i] === ' ') continue;
        if (!isNaN(s[i])) {
            let num = 0;

            //extract entire number
            while (i<s.length && s[i] !== ' ' && !isNaN(s[i])) {
                num = num*10 + parseInt(s[i]);
                i++;
            }
            i--;

            if (curr_operation === '+') {
                res += num;
                prev = num;
            }
            else if (curr_operation === '-') {
                res -= num;
                prev = -num;
            }
            else if (curr_operation === '*') {
                res -= prev;
                prev *= num;
                res += prev;
            }
            else if (curr_operation === '/') {
                res -= prev;
                prev = Math.trunc(prev/num);
                res += prev;
            }
        }
        else {
            curr_operation = s[i];
        }
    }
    return res;
};