/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let map = new Map();
    let max = 0;

    for (let right=0; right<s.length; right++) {
        //second condition makes sure s[right] is part of our current window
        if (map.has(s[right]) && map.get(s[right])>=left) {
            //move left by 1 from the last ocurrence
            left = map.get(s[right]) + 1;
            map.set(s[right], right)

        }
        else {
            map.set(s[right],right)
        }
        max = Math.max(max, right-left+1)
    }

    return max;
};