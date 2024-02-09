/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let result = [];
    nums.sort();
    let map = new Map();
    
    for (let i=0; i<nums.length; i++){
        if (map.has(nums[i])){
            map.set(nums[i], map.get(nums[i])+1);
        }
        else{
            map.set(nums[i], 1);
        }
    }
    
    //console.log(map);
    
    let sortedMap = new Map([...map.entries()].sort((a,b) => b[1] - a[1]));

for (const [key, value] of sortedMap) {
    // if (value >= 1) {
        result.push(key);

    
    if (result.length === k) {
        break;
    }
}
    
    return result;
};