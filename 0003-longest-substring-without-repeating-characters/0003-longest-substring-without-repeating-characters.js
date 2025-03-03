/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //sliding window approach
    //time O(n)
    //space O(n)
    let map = new Map();
    let left = 0;
    let max = 0;

    for (let right=0; right<s.length; right++) {
        if (map.has(s[right]) && left<= map.get(s[right])) {
            left = map.get(s[right])+1;
        }
        map.set(s[right], right)

        max = Math.max(max, right-left+1);
        
    }

    return max;
};