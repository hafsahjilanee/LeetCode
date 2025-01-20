/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.length = capacity;
    this.map = new Map();
    this.lruArr = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        // access the key that is asked and push it to the back of lru array
        const index = this.lruArr.indexOf(key);
        this.lruArr.splice(index,1);
        this.lruArr.push(key);
        return this.map.get(key);
    }
    
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const index = this.lruArr.indexOf(key);
        this.lruArr.splice(index, 1); 
    } else if (this.map.size === this.length) {
        // remove least recently used key
        const leastUsedKey = this.lruArr.shift(); 
        this.map.delete(leastUsedKey);          
    }
    this.map.set(key, value); 
    this.lruArr.push(key);    
};


/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */