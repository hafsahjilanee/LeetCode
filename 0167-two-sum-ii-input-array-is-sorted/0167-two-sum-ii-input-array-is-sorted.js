/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    //Since input array is sorted, two pointer
    //O(n) time, O(1) space

    let left =0;
    let right = numbers.length - 1;

    while (left<right) {
        if (numbers[right] + numbers[left] === target) {
            break;
        }
        else if (numbers[left] + numbers[right] > target) {
            right--;
        }
        else {
            left++;
        }
    }

    return [left+1, right+1];


};