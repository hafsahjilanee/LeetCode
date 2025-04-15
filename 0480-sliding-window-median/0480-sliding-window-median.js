/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let lo = new MaxPriorityQueue(); //stores elements lesser than equal to median
    let hi = new MinPriorityQueue(); //stores elements greater than equal to median

    let res = [];
    let heapDict = new Map();

    for (let i=0; i<k; i++) {
        lo.enqueue(nums[i]);

        hi.enqueue(lo.dequeue());

        if (hi.size() > lo.size()) {
            lo.enqueue(hi.dequeue());
        }
    }

    let median;
    if (k%2 === 1) {
        //median is middle element
        median = lo.front()
        res.push(median);
    }
    else {
        median = (lo.front() + hi.front())/2;
        res.push(median);
    }

    for (let i=k; i<nums.length; i++) {
        let prevNum = nums[i-k];
        heapDict.set(prevNum, (heapDict.get(prevNum) || 0)+1);

        //-1 means min heap aka hi and +1 mean max heap aka lo
        let balance = prevNum <= median ? -1: 1

        if (nums[i] <= median) {
            balance++;
            lo.enqueue(nums[i])
        }
        else {
            balance--;
            hi.enqueue(nums[i]);
        }

        if (balance<0) {
            lo.enqueue(hi.dequeue());
        }
        else if (balance>0) {
            hi.enqueue(lo.dequeue())
        }

         // Remove expired elements
        while (lo.size() > 0 && heapDict.get(lo.front()) > 0) {
            const num = lo.dequeue();
            heapDict.set(num, heapDict.get(num) - 1);
        }
        while (hi.size() > 0 && heapDict.get(hi.front()) > 0) {
            const num = hi.dequeue();
            heapDict.set(num, heapDict.get(num) - 1);
        }

        if (k % 2 === 1) { //middle element
            median = lo.front()
            res.push(median);
        }
        else {
            median = (lo.front() + hi.front()) / 2
            res.push(median);
        }
    }
    return res;
};