/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let q = new MinPriorityQueue();

    for (let num of nums) {
        if (q.size() >= k) {
            if (num < q.front()) {
                continue;
            }
            else {
                q.dequeue();
                q.enqueue(num);
            }
        }
        else {
            q.enqueue(num)
        }
    }

    return q.front();
};