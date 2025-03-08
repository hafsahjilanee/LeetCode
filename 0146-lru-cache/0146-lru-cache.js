class ListNode {
    constructor(key,value) {
        this.key = key;
        this.val = value;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.node_map = new Map();

    //init with some dummy values
    this.head = new ListNode(-1,-1);
    this.tail = new ListNode(-1,-1);

    //since it's a doubly linked list we'll need to link them
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.node_map.has(key)) return -1;

    let node = this.node_map.get(key);

    //since this node has been recently used that means ll needs to be updated and moved to the end of the ll bc it has been recently been used
    this._remove(node);
    this._add(node)

    return node.val
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.node_map.has(key)) {
        let oldNode = this.node_map.get(key);
        this._remove(oldNode);
    }

    let node = new ListNode(key,value);
    this.node_map.set(key,node);
    this._add(node);

    if (this.node_map.size > this.capacity) {
        //remove from head
        let nodeToDelete = this.head.next;
        this._remove(nodeToDelete);
        this.node_map.delete(nodeToDelete.key)
    }
};

//add a remove method your self
LRUCache.prototype._add = function(node) {
    let prev_end = this.tail.prev;
    prev_end.next = node;
    node.prev = prev_end;

    node.next = this.tail;
    this.tail.prev = node;
};

//add a remove method your self
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