class ListNode {
    constructor(val, next, prev) {
        this.val = val ?? undefined;
        this.next = next ?? undefined;
        this.prev = prev ?? undefined;
    }
}
var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.length) return -1
    let currNode = this.head
    let i = 0
    while(i != index){
        currNode = currNode.next
        i++
    }
    return currNode.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    
    let node = new ListNode(val);
    
    if (!this.length) {
        this.head = node;
        this.tail = node;
    }
    else {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    
    this.length++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let node = new ListNode(val);
    if (!this.length) {
        this.head = node;
        this.tail = node;
    }
    else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node
    }
    
    this.length++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    let node = new ListNode(val);
    let count = 0;
    if (index === this.length) {
        this.addAtTail(val);
    }
    else if (index > this.length) {
        return;
    }
    else if (index === 0) {
        this.addAtHead(val);
    }
    else {
        let curr = this.head;
        let prev;
        while (count < index) {
            prev = curr;
            curr = curr.next;
            count++;
        }
        
        prev.next = node;
        node.prev = prev;
        node.next = curr;
        curr.prev = node;
        
        this.length++;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index < 0 || index >= this.length) return
    if (index === 0) {
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = this.head.next;
            this.head.prev = null
        }
    }else if(index === this.length -1){
        this.tail.next = null
        this.tail = this.tail.prev
    }else{
        let currNode = this.head
        let i = 0
        while(i != index){
            
            currNode = currNode.next
            i++
        }
        currNode.prev.next = currNode.next
        currNode.next.prev = currNode.prev
    }
    this.length--
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */