/**
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function(nums) {
    this.nonZero = [];

    for (let i=0; i<nums.length; i++) {
        if (nums[i] !== 0) {
            this.nonZero.push([i, nums[i]]);
        }
    }
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function(vec) {
    let i = 0;
    let j = 0;
    let res = 0;

    while (i<this.nonZero.length && j<vec.nonZero.length) {
        let [i1, val1] = this.nonZero[i];
        let [i2, val2] = vec.nonZero[j];

        if (i1===i2) {
            res +=val1*val2;
            i++;
            j++;
        }
        else if(i1<i2) {
            i++;
        }
        else {
            j++;
        }

    }
    return res;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);