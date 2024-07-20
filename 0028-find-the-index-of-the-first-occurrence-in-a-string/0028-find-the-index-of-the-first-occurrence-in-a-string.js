/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let j=0
    let index = -1;
    if(haystack === needle){
        return 0;
    }
    
    for (let i=0; i<=haystack.length - needle.length; i++){
        if(haystack.substring(i, i+ needle.length) === needle){
            return i;
        }
    }
    
    //console.log(indexes)
    return index;
};