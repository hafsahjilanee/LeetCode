/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let sorted1 = s.toLowerCase().split('').sort();
  let sorted2 = t.toLowerCase().split('').sort();

  
  if (sorted1.length !== sorted2.length){
    return false
  }
  
  for (let i=0; i<sorted1.length; i++){
    if (sorted1[i] === sorted2[i]){
      continue;
    }
    else{
      return false;
    }
  }
  
  return true;
};