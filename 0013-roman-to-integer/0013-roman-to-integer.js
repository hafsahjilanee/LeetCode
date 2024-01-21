/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
let map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
]);
  let num=0;
  
     for (let i=0; i<s.length; i++){
     const num1 = map.get(s.charAt(i));
     const num2 = map.get(s.charAt(i+1));
    
     if (num1< num2){
       num+= num2-num1;
         i++;
     }
     else {
       num+= num1
     }
     }
     return num;
};
