/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    //TC O(n)
    //SC O(n)
    if (num<11) return num;

    let numsArr = num.toString().split('');

    let maxRight = numsArr[numsArr.length-1];
    let maxRightIndex = numsArr.length-1;
    let swap_i = -1;
    let swap_j = -1;

    for (let right= numsArr.length-2; right>=0; right--) {
        if (numsArr[right]> maxRight) {
            maxRight = numsArr[right];
            maxRightIndex = right;
        }

        if (numsArr[right] < maxRight) {
            [swap_i, swap_j] = [right, maxRightIndex];
        }
    }

    [numsArr[swap_i], numsArr[swap_j]] = [numsArr[swap_j], numsArr[swap_i]];

    return parseInt(numsArr.join(''));
};