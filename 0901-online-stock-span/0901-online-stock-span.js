
var StockSpanner = function() {
    this.stack = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    //tc 0(n^2)
    //sc 0(n)

    // let count = 1;
    // this.stack.push(price)

    // if (!this.stack.length) {
    //     return count;
    // }

    // let right = this.stack.length-2; //-2 bc last index is price which will always be 1

    // while (right>=0 && this.stack[right] <= price) {
    //     count++;
    //     right--;
    // }

    // return count;

    //O(1) tc bc Each price is pushed and popped from the stack at most once.
    //O(n) sc bc of stack
    let count = 1;
    while (this.stack.length && this.stack[this.stack.length-1][0]<=price) {
        //u need to add the count that is already lesser than equal to price at index 1
        count+= this.stack.pop()[1];
    }

    this.stack.push([price, count]);

    return count;

};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */