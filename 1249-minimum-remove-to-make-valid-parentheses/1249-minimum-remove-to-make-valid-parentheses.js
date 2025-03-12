/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let res = [];
    let open = 0;
    let close = 0;

    for (let char of s) {
        //))((
        //))
        if (char === ')') {
            if (open === 0) continue;
            open--;
        }
        else if (char === '(') open++;

        res.push(char)
    }

    let final = [];

    for (let i= res.length-1; i>=0; i--) {
        if (res[i]==='(') {
            if (close===0) continue;
            close--;
        }
        else if (res[i]===')') close++;

        final.push(res[i]);
    }

    return final.reverse().join('');
};