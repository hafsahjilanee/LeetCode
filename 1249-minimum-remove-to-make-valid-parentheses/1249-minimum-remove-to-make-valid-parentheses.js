/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let sArr = s.split('');
    let open = 0;

    //forward pass
    for (let i=0; i<sArr.length; i++) {
        if (sArr[i] === '(') {
            open++;
        }
        else if (sArr[i] === ')') {
            if (open === 0) {
                sArr[i] = '';
            }
            else {
                open--;
            }
        }
    }
    
    //backward pass
    let close = 0;
    for (i = sArr.length-1; i>=0; i--) {
        if (sArr[i] === ')') {
            close++;
        }
        else if (sArr[i] === '(') {
            if (close === 0) {
                sArr[i] = ''
            }
            else {
                close--;
            }
        }
    }

    return sArr.join('');
};