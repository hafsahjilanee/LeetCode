/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {

    // //use binary search if you will have no duplicate values
    // let left = 0;
    // let right = arr.length-k

    // while (left< right) {
    //     let mid = Math.floor((left+right)/2);

    //     if (Math.abs(arr[mid]-x) >Math.abs(arr[mid+k]-x)) {
    //         left = mid+1;
    //     }
    //     else {
    //         right = mid;
    //     }
    // }

    // return arr.slice(left, left+k);



    //O(N) TC
    //O(1) sc
    let left = 0;
    let right = arr.length -1;

    while (right-left >= k) {
         if (Math.abs(arr[left]-x) > Math.abs(arr[right] - x)) {
            left++;
         }
         else {
            right--;
         }
    }

    return arr.slice(left, right+1);
};