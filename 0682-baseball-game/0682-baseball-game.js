/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let res = [];
    let value;
    let total = 0;
    res.push(+operations[0]);
    for (let i=1; i< operations.length; i++) {
        // console.log(operations[i]);
        // console.log(operations[i] === '+')
        if (operations[i] === '+'){
            value = res[res.length-1] + res[res.length-2];
            res.push(value)
        }
        else if (operations[i] === 'D'){
            value = res[res.length-1] *2;
            res.push(value);
        }
        else if (operations[i] === 'C'){
            res.pop();
        }
        else {
            res.push(+operations[i])
        }
    }
    //console.log(res)
    for (let i=0; i<res.length; i++){
        // console.log(res[i]);
        // console.log(total)
        total+= res[i]
    }
    
    return total;
};