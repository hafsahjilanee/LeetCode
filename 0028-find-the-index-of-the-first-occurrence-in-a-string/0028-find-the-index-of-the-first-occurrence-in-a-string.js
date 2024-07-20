/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j=0
    let index = -1;
    for (let i=0; i<haystack.length; i++){
        if (haystack[i] === needle[0]){
            index = i;
            if (needle.length === 1){
                return index;
            }
            j = i+1;
            // console.log(index);
            // console.log("j", j, haystack[j])
            for (let k=1; k<needle.length; k++){
                //console.log('h and n', haystack[j], needle[k])
                if (haystack[j] === needle[k]){
                    if (k=== needle.length -1) {
                        return index;
                        break;
                    }
                    else{
                        j++;
                        continue;
                    }
                }
                else{
                    index = -1
                    break;
                }
            }
        }
    }
    
    //console.log(indexes)
    return index;
};