/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {

    let result="";
    for (let word of words){
        
      if (word.length ===1){
        return word;
      }
        
        for (let i=0; i<Math.floor(word.length/2); i++){
            if (word[i] === word[word.length-i-1]){
              
                result = word
                continue;
            }
            else{
                result = ""
                break;
            }
        }
        
        if (result.length !==0){
            return result;
        }
    }
    
    return result;
};