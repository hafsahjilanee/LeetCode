/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let i = m-1;
    let j = n-1;
    let k = m+n-1;
//[1,2,3,0,0,0] [1,5,6]
//i=2, j=2, k=5, nums1[2] > nums2[2], 3>6 no, nums1[5] = 6
//nums1 = [1,2,3,0,0,6] i=2,j=1,k=4

//nums1[2] > nums2[1], 3>5 no, second case nums1[4] = nums2[1], nums1[4] = 5
//nums1 =[1,2,3,0,5,6], i=2, j=0, k=3

//nums1[2] > nums2[0], 3>2 true
//nums1[k] = nums2[0], nums1[3] = 3
//[1,2,3,3,5,6], i=1, j=0, k=2

//nums1[1] > nums2[0], 2>1 tr
//nums1[2] =2
//[1,2,2,3,5,6]

//nums1[0] > nums2[0], 1>1 f
//nums1[0] = 1
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};