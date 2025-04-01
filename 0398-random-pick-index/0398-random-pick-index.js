/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    //O(1) space solution
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    let count = 0;
    let pickIndex = 0;
    for (let i=0; i<this.nums.length; i++) {
        if (this.nums[i] === target) {
            count++; 
            if (Math.floor(Math.random() * count) === 0) {
                pickIndex = i; 
            }
        }
    }
    return pickIndex;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */