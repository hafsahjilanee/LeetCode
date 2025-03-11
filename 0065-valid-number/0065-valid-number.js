/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();
    let n = s.length;

    if (n===0) return false;

    let i=0; 
    let hasNum = false;
    let hasDot= false;
    let hasE = false;

    if (s[i]==='-' || s[i]==='+') i++;

    while (i<n) {
        if (s[i] >= '0' && s[i] <='9') hasNum= true;
        else if (s[i]==='.') {
            //if dot already exists return false 
            //or if you have 6e6.5, can not allow . after e so return false
            if (hasDot || hasE) return false;

            hasDot = true;
        }
        else if (s[i]==='e' || s[i]==='E') {
            if (!hasNum || hasE) return false;

            hasE = true;
            hasNum = false //reset to check for number after

            //to handle cases where e followed by +- e.g 3e+7 or 3e-6
            if (i + 1 < n && (s[i + 1] === '+' || s[i + 1] === '-')) i++;
        }
        else {
            return false;
        }
        i++
    }

    return hasNum;
};