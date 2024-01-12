var twoSum = function(nums, target) {
    let result = [];
    let map = new Map();
    
    for (let i= 0; i<nums.length; i++){
      let number = target - nums[i];
      //second condition is to make sure both indexes are not same
      if (map.has(number) && map.get(number) !== i ){
        result.push(i);
        result.push(map.get(number))
        return result
      }
      
      map.set(nums[i], i);
    }
    return [];
    
};