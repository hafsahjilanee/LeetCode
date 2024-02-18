/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split('');
    
    console.log(arr);
    let s1=[];
    
    let map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])
    
    if (arr.length%2 !== 0){
        return false;
    }
    for (let char of arr){
      console.log('s1', s1)
        if (char==='(' || char==='[' || char === '{'){
            s1.push(char);
        }
        else if(char===')' || char===']' || char === '}'){
            let temp = s1.pop();
            // console.log('tmp', temp)
            // console.log(temp === map.get(char))
            // console.log(map.get(char))
            if (temp === map.get(char)){
                continue;
            }
            else{
                return false;
            }
        }
    }
    
    //if after the end of iteration array length is not 0 means there are no closing brackets hence return false
    if (s1.length ==0){
    return true;
    }
    else{
    return false;
    }
};

