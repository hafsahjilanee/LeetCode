
var MedianFinder = function() {
    this.lo = new MaxPriorityQueue();
    this.hi = new MinPriorityQueue();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    //TC Olog n per heap insertion
    this.lo.enqueue(num);

    this.hi.enqueue(this.lo.dequeue());

    if (this.hi.size() > this.lo.size()) {
        this.lo.enqueue(this.hi.dequeue());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    //O(1) per peek
    if (this.hi.size() === this.lo.size()) {
        return (this.hi.front()+this.lo.front())/2;
    }
    else {
        return this.lo.front();
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */