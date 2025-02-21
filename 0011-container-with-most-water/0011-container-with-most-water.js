/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //time is O(N)
    //space is O(1) bc we only iterate through the array once

    let left = 0;
    let right = height.length-1;
    let maxArea = -Infinity;

    while (left<right) {
        //area = height of the min column * (base which is right index - left index)
        //we take height of the min column bc water cannot go above that, it is limited by the lower height col

        let area = Math.min(height[left], height[right]) * (right-left);

        maxArea = Math.max(maxArea,area);

        //we move pointer from the short height bc area is limited by the short height
        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }

    }

    return maxArea;
};