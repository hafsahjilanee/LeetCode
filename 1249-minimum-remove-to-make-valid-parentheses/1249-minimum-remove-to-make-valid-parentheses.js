/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0;
    let close = 0;
    let s1 = s.split('');
    let res = [];

    for (const char of s1) {
        if (char === '(') {
            open++;
        }
        else if (char === ')') {
            close++;
        }
        else {
            //always process other characters
            res.push(char);
            continue;
        }

        //IMPORTANT TO ADD CONDITION HERE, if more closing bracket then dont add
        if (close>open) {
            close--;
            continue;
        }
        res.push(char);
        
        
    }
    open=0, close=0;
    let result = [];

    for (let i=res.length-1; i>=0; i--) {
        if (res[i] === '(') {
            open++;
        }
        else if (res[i] === ')') {
            close++;
        }
        else {
            //always process other characters
            result.push(res[i]);
            continue;
        }

        //IMPORTANT TO ADD CONDITION HERE, if more closing bracket then dont add
        if (open>close) {
            open--;
            continue;
        }
        result.push(res[i]);
    }

    return result.reverse().join('');
};