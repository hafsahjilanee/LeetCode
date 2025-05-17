/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = -Infinity

    while (left < right) {
        //bc minHeight determines the rectangle formed
        let minHeight = Math.min(height[left], height[right]);
        area = Math.max(area, minHeight * (right - left));

        if (height[left] < height[right]) {
            left++;
        }
        else {
            right--;
        }
    }

    return area;

};