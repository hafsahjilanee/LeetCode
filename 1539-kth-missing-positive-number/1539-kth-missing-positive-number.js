/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    // //O(n) tc
    // //sc O(1)
    
    // if (arr[0] !== 1) {
    //     //[5,6,7] and k=3
    //     if (arr[0]-1 >=k) {
    //         return k
    //     }
    //     else {
    //         k-= arr[0]-1;
    //     }
    // }

    // let i =0;

    // while (i<arr.length) {
    //     let diff = arr[i+1] - arr[i];

    //     if (diff !== 1) {
    //          for (let j=arr[i] +1; j<arr[i+1]; j++) {
    //             k-=1;

    //             if (!k) {
    //                 return j;
    //             }
    //          }
    //     }
    //     i++;
    // }

    // if (k) {
    //     return arr[arr.length-1] +k;
    // }

    ////////////////////////////////////////////////////
    //0(log n) approach

    let left =0;
    let right = arr.length-1;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        // 4-(2+1) = 1
        let missing = arr[mid] - (mid+1);

        if (k > missing) {
            left = mid+1
        }
        else {
            right = mid-1;
        }
    }
    //left is the position where the sequence "should" be if no numbers were missing.
    //Adding k accounts for the k missing numbers skipped before reaching left.
    return left +k;
};