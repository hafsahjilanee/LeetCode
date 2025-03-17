/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let sArr = s.split('');
    let open = 0;

    // First pass: Remove extra ')'
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '(') {
            open++;
        } else if (sArr[i] === ')') {
            if (open === 0) {
                sArr[i] = ''; // Mark for removal
            } else {
                open--;
            }
        }
    }

    // Second pass: Remove extra '(' from right
    let close = 0;
    for (let i = sArr.length - 1; i >= 0; i--) {
        if (sArr[i] === '(') {
            if (close === 0) {
                sArr[i] = '';
            }
            else {
                close--;
            }
        }else if (sArr[i] === ')') close++;
    }

    return sArr.join('');
};