/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // if (!nums.length) return [];

    // const freqMap = new Map();

    // for (let num of nums) {
    //     freqMap.set(num, (freqMap.get(num)||0) +1);
    // }

    // const bucket = new Array(nums.length+1).fill(null).map(()=> []);

    // for (let [nums, freq] of freqMap) {
    //     bucket[freq].push(nums);
    // }
    // let res = [];
    // for (let i=bucket.length-1; i>=0; i--) {
    //     if (res.length===k) {
    //         return res;
    //     }
    //     if (bucket[i].length) {
    //         res.push(...bucket[i]);
    //     }
    // }


    if (!nums.length) return [];
    let maxHeap = new MinPriorityQueue((item) => item[0])
    const freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num)||0) +1);
    }

    for (let [num, freq] of freqMap) {
        maxHeap.enqueue([freq,num]);

        if (maxHeap.size()>k) {
            maxHeap.dequeue()
        }
    }
    let res = [];
    while (res.length !== k) {
        res.push(maxHeap.dequeue()[1]);
    }

    return res;
};