/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let arr = [];
    let count =0;
    let valCount =0
    for (let i=0; i< nums.length- valCount; i++){
        if (nums[i] === val){
            console.log("numss",nums[i])
            let elem = nums.splice(i, 1);
            nums.push(elem[0])
            i--;
            valCount++;
        }

    }

    return nums.length - valCount
};