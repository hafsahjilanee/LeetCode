/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function(ribbons, k) {
    //[1,2,3,....,9]
    //min ribbon length
    let left = 1;
    //max ribbon length
    let right = Math.max(...ribbons);
    let numberOfCuts = 0;

    let res = 0;

    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        numberOfCuts = 0;

        for (let ribbon of ribbons) {
            numberOfCuts += Math.floor(ribbon/mid)
        }

        if (numberOfCuts>=k) {
            res = mid;
            left = mid+1;
        }
        else {
            right = mid-1;
        }
    }
    return res;
};