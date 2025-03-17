/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    s = s.trim();
    let curr_operation = '+';
    let res =0;
    let prev = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if (!isNaN(s[i]) && Number(s[i]!==0)) {
            let number = 0;

            while (i < s.length && s[i] !==' ' && !isNaN(s[i])) {
                number = number*10 + Number(s[i]);
                i++;
            }
            i--;

            if (curr_operation === '+') {
                res+=number;
                prev = number;
            }
            else if (curr_operation === '-') {
                res-=number;
                prev=-number

            }
            else if (curr_operation === '*') {
                //3+2*2
                res -=prev //5-2 = 3
                prev = prev*number;
                res += prev;
            }
            else if (curr_operation === '/') {
                //3+5/2
                res-=prev; //8-5 = 3
                prev = Math.trunc(prev/number);
                res+= prev;
            }

        }
        else {
            curr_operation = s[i];
        }
    }

    return res;
};