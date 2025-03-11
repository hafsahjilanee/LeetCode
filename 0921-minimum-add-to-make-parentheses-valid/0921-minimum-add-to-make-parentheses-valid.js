/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let open = 0;
    let close = 0;
    let required = 0;

    //forward pass
    for (let i=0; i<s.length; i++) {
        if (s[i] === ')') {
            if (open===0) {
                required++;
                continue;
            }
            open--;
        }
        else if (s[i] === '(') open++;
    }

    //backward pass 
    for (let i=s.length; i>=0; i--) {
        if (s[i]==='(') {
            if (close ===0) {
                required++;
                continue;
            }
            close--;
        }
        else if (s[i]===')') close++
    }

    return required;
};