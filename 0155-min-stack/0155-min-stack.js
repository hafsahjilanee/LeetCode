
var MinStack = function() {
    this.stack = [];        
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (!this.stack.length) {
        this.stack.push([val, val]);
    }
    else {
        let min = this.stack[this.stack.length-1][1];
        if (val<min) {
            this.stack.push([val,val])
        }
        else {
            this.stack.push([val, min])
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.stack.length === 0) return;
    this.stack.pop();       
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1][0]; 
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1][1];  
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */