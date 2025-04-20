/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    if (arr[0] !== 1) {
        //[5,6,7] and k=3
        if (arr[0]-1 >=k) {
            return k
        }
        else {
            k-= arr[0]-1;
        }
    }

    let i =0;

    while (i<arr.length) {
        let diff = arr[i+1] - arr[i];

        if (diff !== 1) {
             for (let j=arr[i] +1; j<arr[i+1]; j++) {
                k-=1;

                if (!k) {
                    return j;
                }
             }
        }
        i++;
    }

    if (k) {
        return arr[arr.length-1] +k;
    }
};