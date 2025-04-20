class ListNode {
    constructor (key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.head = new ListNode(-1,-1);
    this.tail = new ListNode(-1,-1);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    //to keep track of nodes present in ll;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    if (this.map.has(key)) {
        //delete node and readd to back of ll
        let oldNode = this.map.get(key);
        this._remove(oldNode);
        this._add(oldNode);
    }

    return this.map.get(key).val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let oldNode = this.map.get(key);
        this._remove(oldNode);
    }

    let newNode = new ListNode(key, value);
    this._add(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.capacity) {
        let nodeToDelete = this.head.next;
        this._remove(nodeToDelete);
        this.map.delete(nodeToDelete.key);
    }
};

LRUCache.prototype._add = function(node) {
    //add to the end of the doubly ll
    let prevNode = this.tail.prev;
    prevNode.next = node;
    node.prev = prevNode;

    node.next = this.tail;
    this.tail.prev = node;
};

LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */