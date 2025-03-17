/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let open = 0;
    let toRemove = [];
    let sArr = s.split('');
   
    for (let i=0; i<sArr.length; i++) {
        if (sArr[i] === '(') {
            toRemove.push(i);
        }
        else if (sArr[i] === ')') {
            if (toRemove.length) {
                toRemove.pop();
                continue;
            }
            else {
                sArr[i] = '';
            }
        } 
    }
    
    while (toRemove.length) {
        sArr[toRemove.pop()] ='';
    }


    return sArr.join('');
};