/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let res=0;
    let lastDigit;
    let remainingDigits;
    let negative = false;
    if (x<0) {
        negative = true;
        x = x* -1;
    }
    console.log('xxxxx', x)
    while (x) {
        lastDigit = x%10
        x = Math.floor(x/10);
        res = res*10 + lastDigit;

        if (res>Math.pow(2,31)-1) {
            return 0;
        }
    }

    if (negative) {
        res = res*-1;
    }

    return res;

};