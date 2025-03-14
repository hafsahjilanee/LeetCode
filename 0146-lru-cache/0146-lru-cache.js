class ListNode {
    constructor(key,val) {
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
    this.map = new Map();

    this.head = new ListNode(-1,-1);
    this.tail = new ListNode(-1,-1);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    //check if map has key
    //add key to back of ll since it was recently used
    if (!this.map.has(key)) return -1;

    if (this.map.has(key)) {
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
    // If the key already exists, remove it to update its value and move it to the back
    if (this.map.has(key)) {
        let oldNode = this.map.get(key);
        this._remove(oldNode);
    }

    //add node to back of ll
    //check if capacity is exceeding then remove
    let node = new ListNode(key,value);
    this._add(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
        //remove from head
        let lruNode = this.head.next
        this.map.delete(lruNode.key);
        this._remove(lruNode);
    }
    
};

LRUCache.prototype._add = function(node) {
    let prevNode = this.tail.prev;
    prevNode.next = node;
    node.prev = prevNode;

    node.next = this.tail;
    this.tail.prev = node;
}

LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */