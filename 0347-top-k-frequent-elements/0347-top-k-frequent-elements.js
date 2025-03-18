/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    if (!nums.length) return [];

    const freqMap = new Map();
    let count = 0;

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num)||0) +1);
    }

    const bucket = new Array(nums.length+1).fill(null).map(()=> []);

    for (let [nums, freq] of freqMap) {
        bucket[freq].push(nums);
    }
    let res = [];
    for (let i=bucket.length-1; i>=0; i--) {
        if (count===k) {
            return res;
        }
        if (bucket[i].length) {
            res.push(...bucket[i]);
            count++
        }
    }
};