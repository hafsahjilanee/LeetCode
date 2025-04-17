/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    
    // let open = 0;
    // let res = []

    // //forward pass
    // for (let i=0; i<s.length; i++) {
    //     if (s[i] === '(') open++;
    //     else if (s[i] === ')') {
    //         if (open === 0) continue;
    //         open--;
    //     }
    //     res.push(s[i]);
    // }

    // let close = 0;
    // let finalRes = [];
    // //backward pass
    // for (let i=res.length-1; i>=0; i--) {
    //     if (res[i] === ')') close++;
    //     else if (res[i] === '(') {
    //         if (close === 0) continue;
    //         close--
    //     }
    //     finalRes.push(res[i]);
    // }

    // return finalRes.reverse().join('');

    /////////////////////
    //doing it in-place
    let open = 0;
    let sArr = s.split('')

    //forward pass
    for (let i=0; i<sArr.length; i++) {
        if (s[i] === '(') open++;
        else if (s[i] === ')') {
            if (open === 0) {
                sArr[i] = "" //mark for removal
            }
            else {
                open--;
            }
        }
    }

    let close = 0;
    //backward pass
    for (let i=sArr.length-1; i>=0; i--) {
        if (sArr[i] === ')') close++;
        else if (sArr[i] === '(') {
            if (close === 0) {
                sArr[i] = "" //mark for removal
            }
            else {
                close--;
            }
        }
    }

    return sArr.join('');
};