/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num)||0)+1);
    }
    
    nums.sort((a,b) => {
        const freqA = map.get(a);
        const freqB = map.get(b);

        //if freq are not equal sort by freq in asc else desc
        if (freqA !== freqB) {
            return freqA - freqB;
        }
        else {
            return b-a;
        }
    })

    return nums;
};