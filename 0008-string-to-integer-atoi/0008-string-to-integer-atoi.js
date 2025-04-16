/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    //trim takes O(n)
    //parsing the entire string is also O(n)

    //SC O(1)
    s = s.trim();
    if (!s.length) return 0;

    let i = 0;
    let sign = 1;

    // Handle optional sign
    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let parsed = 0;
    const MAX = 2 ** 31 - 1;  // Corrected MAX value
    const MIN = -(2 ** 31);

    while (i < s.length) {
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);  // More reliable digit check
        if (digit < 0 || digit > 9) break;  // Stop if non-digit

        // Check for overflow before updating parsed
        if (parsed > Math.floor((MAX - digit) / 10)) {
            return sign === 1 ? MAX : MIN;
        }
        parsed = parsed * 10 + digit;
        i++;
    }

    parsed *= sign;
    return parsed < MIN ? MIN : parsed > MAX ? MAX : parsed;
};