/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let digit = 0;
    let sum = 0;
    let total = '';

    while (i >= 0 || j >= 0 || carry) {
        let digit1 = i >= 0 ? Number(num1[i]) : 0;
        let digit2 = j >= 0 ? Number(num2[j]) : 0;
        sum = digit1 + digit2 + carry;

        digit = sum % 10;
        carry = Math.trunc(sum / 10);


        total = digit + total;
        i--;
        j--;
    }

    return total;
};