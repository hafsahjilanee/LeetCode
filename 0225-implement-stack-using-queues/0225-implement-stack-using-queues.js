class ListNode {
    constructor(val, next, prev) {
        this.val = val ?? undefined;
        this.next = next ?? undefined;
        this.prev = prev ?? undefined;
    }
}
    
var MyStack = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let node = new ListNode(x);
    
    if (this.length === 0) {
        this.tail = node;
        this.head = node;
    }
    else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
    
    this.length++;
    
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let topItem = this.tail.val;
    
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
        
    }
    else {
        this.tail = this.tail.prev;
        this.tail.next = null;
    }
 
    this.length--;
    return topItem;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.tail.val;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
