/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let nums1Set = new Set(nums1);
    let nums2Set = new Set(nums2);
    nums1 = [...nums1Set];
    nums2 = [...nums2Set];
    let res1 = [];
    let res2 = [];
    let i=0;
    let j=0;

    while (i< nums1Set.size || j<nums2Set.size) {
        if (i<nums1Set.size && !nums2Set.has(nums1[i])) {
            res1.push(nums1[i]);
        }
        if (j<nums2Set.size && !nums1Set.has(nums2[j])) {
            res2.push(nums2[j]);
        }
        i++;
        j++;
    }

    return [res1, res2];
};