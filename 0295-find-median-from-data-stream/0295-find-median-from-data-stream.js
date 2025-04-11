
var MedianFinder = function() {
    //elements lesser than median
    this.lo = new MaxPriorityQueue();
    //elements higher than the median
    this.hi = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    // First, always add to the max-heap (lo)
    this.lo.enqueue(num);
    
    // Then balance by moving largest from lo to hi
    this.hi.enqueue(this.lo.dequeue());
    
    // If hi becomes larger, move smallest back to lo
    if (this.hi.size() > this.lo.size()) {
        this.lo.enqueue(this.hi.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.lo.size() === this.hi.size()) {
        return (this.hi.front() + this.lo.front()) / 2;
    } else {
        return this.lo.front();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */