/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let valCount =0
    for (let i=0; i< nums.length- valCount; i++){
        if (nums[i] === val){
            let elem = nums.splice(i, 1);
            nums.push(elem[0])
            i--;
            valCount++;
        }

    }

    return nums.length - valCount
};