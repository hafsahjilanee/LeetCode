/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let minPQ = new MinPriorityQueue();
    minPQ.enqueue(nums[0]);

    for (let i=1; i<nums.length; i++) {
        if (minPQ.size() < k) {
            minPQ.enqueue(nums[i]);
        }
        else if (nums[i] >= minPQ.front().element){
            //remove 1 element bc we only need to maintain k elements else it will keep incrementing heap size
                minPQ.dequeue();
                minPQ.enqueue(nums[i]);
        }
    }
    return minPQ.dequeue().element
};