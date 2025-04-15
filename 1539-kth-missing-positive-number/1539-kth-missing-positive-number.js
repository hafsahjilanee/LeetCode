/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let res = [];
    let missingNum = 1;
    while (arr[0]>1 && arr[0]-missingNum !==0) {
        res.push(missingNum);
        missingNum++;
    }
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i+1]-arr[i] > 1) {
            let num = arr[i] + 1;
            while (arr[i+1] - num >= 1) {
                res.push(num);
                num++;
            }
        }

        if (res.length && res[k-1]) {
            return res[k-1];
        }
    }

    missingNum = arr[arr.length-1] + 1;
    while (k>0) {
        res.push(missingNum);
        missingNum++;

        if (res.length && res[k-1]) {
            return res[k-1];
        }
    }

};