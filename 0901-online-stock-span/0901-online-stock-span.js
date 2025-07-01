
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let count = 1;
    this.stack.push(price)

    if (!this.stack.length) {
        return count;
    }

    let right = this.stack.length-2; //-2 bc last index is price which will always be 1

    while (right>=0 && this.stack[right] <= price) {
        count++;
        right--;
    }

    return count;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */