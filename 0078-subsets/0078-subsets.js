/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    //complexity O(n*2^n)
    let superset = [];
    let subset = [];
    superset.push([]);
    const creatSubset = (i) => {
        if (i>=nums.length) {
            return;
        }

        subset.push(nums[i]);
        superset.push([...subset]);
        creatSubset(i+1)
        subset.pop();
        creatSubset(i+1);
    }

    creatSubset(0);
    return superset;
};