/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.stream = [];
    this.size = size;
    this.total = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.stream.push(val);
    this.total+= val;

    if (this.stream.length > this.size) {
        let removeFromLeft = this.stream.shift();
        this.total -= removeFromLeft;    
    }

    return this.total/this.stream.length;

};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */