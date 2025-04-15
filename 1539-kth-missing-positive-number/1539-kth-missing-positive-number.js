/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    //TC O(n) in worst case we'll have to iterate over all elements
    //SC O(1) we only using a few extra variables
    if (arr[0] !== 1) {
        //e.g if k=3 and arr [5,6,7] then result will be 3
        if (arr[0] - 1 >= k) {
            return k;
        }
        else {
            //find missing k elements
            k -= arr[0] - 1;
        }
    }

    let i = 0;

    while (i < arr.length - 1) {
        let diff = arr[i + 1] - arr[i];

        if (diff !== 1) {
            for (let j = arr[i] + 1; j < arr[i + 1]; j++) {
                //k stores how many more elements we need to find 
                k -= 1;

                if (!k) {
                    return j;
                }
            }
        }
        i++;
    }

    if (k) {
        return arr[arr.length - 1] + k
    }
};