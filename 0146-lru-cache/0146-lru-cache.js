class ListNode {
    constructor(key, value) {
        this.val = value;
        this.key = key;
        this.prev = null;
        this.next = null;
    }
}
//push towards the end
//remove from the head
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = new Map();
    //doubly linked list
    this.head = new ListNode(-1, -1);
    this.tail = new ListNode(-1, -1);
    this.capacity = capacity;

    this.head.next = this.tail;
    this.tail.prev = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    //fetch from the map
    //move it to the back
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);
    this._remove(node);
    this._add(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //check capacity
    //and then remove and add
    if (this.map.has(key)) {
        let oldNode = this.map.get(key);
        this._remove(oldNode);

    }

    let node = new ListNode(key,value);
    this.map.set(key, node);
    this._add(node);

    if (this.map.size > this.capacity) {
        let lruNode = this.head.next;
        this._remove(lruNode);
        this.map.delete(lruNode.key)
    }

};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//_remove
LRUCache.prototype._remove = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

//_add
LRUCache.prototype._add = function (node) {
    //add to the end of the ll
    let prevNode = this.tail.prev;
    prevNode.next = node;
    node.prev = prevNode;
    node.next = this.tail;
    this.tail.prev = node;



};