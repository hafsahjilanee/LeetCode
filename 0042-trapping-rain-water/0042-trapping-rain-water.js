/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let left = 0;
    let right = height.length-1;
    let trapped = 0;

    let maxLeft = 0;
    let maxRight = 0;

    while (left<right) {
        maxLeft = Math.max(maxLeft, height[left]);
        maxRight = Math.max(maxRight, height[right]);

        if (maxLeft < maxRight) {
            trapped += maxLeft - height[left]; //height[left] is current. 
            //we only need to subtract heights bec base is always 1
            left++;
        }
        else {
            trapped += maxRight - height[right];
            right--;
        }
    }

    return trapped;
};