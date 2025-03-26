/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (!s || !t || t.length> s.length) {
        return "";
    }

    let dictT = new Map();

    for (let char of t) {
        dictT.set(char, (dictT.get(char)||0)+1);
    }

    let required = dictT.size;
    let left = 0;
    let formed = 0;
    //For each character encountered, we update its count in windowCounts
    let windowCounts = {};
    //[current length of substr, intial left, initial right]
    let ans = [Infinity, 0, 0]

    for (let right=0; right<s.length; right++) {
        const char = s[right];

        windowCounts[char] = (windowCounts[char] || 0) +1;

        if (dictT.has(char) && windowCounts[char] === dictT.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            if (right-left+1 < ans[0]) {
                ans = [right-left+1, left, right];
            }

            //reduce window from left
            const leftChar = s[left];
            windowCounts[leftChar]--;

            //check if leftchar was in dict t, then reduce formed count as well
            if (dictT.has(leftChar) && windowCounts[leftChar] < dictT.get(leftChar)) {
                //decrement we've lost the match
                formed--;
            }
            left++;
        }
    }

    return ans[0] === Infinity ? "" : s.slice(ans[1], ans[2]+1);
};