class ListNode {
    constructor(val, next, prev) {
        this.val = val ?? undefined;
        this.next = next ?? undefined;
        this.prev = prev ?? undefined;
    }
}
/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.homepage = homepage;
    this.currentNode = new ListNode(homepage);
    this.head = this.currentNode;
    this.tail = this.currentNode;
    this.length = 1;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    let node = new ListNode(url);
    this.currentNode.next = node;
    node.prev = this.currentNode;
    this.currentNode = node;
    this.tail = node;
    
    this.length++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    let counter = 0
    
    while (counter<steps && this.currentNode && this.currentNode.prev){
        this.currentNode = this.currentNode.prev;
        counter++;
    }
    
    return this.currentNode.val;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    let counter =0;
    
    while (counter<steps && this.currentNode && this.currentNode.next){
        this.currentNode = this.currentNode.next;
        counter++;
    }
    return this.currentNode.val;
    
    
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */