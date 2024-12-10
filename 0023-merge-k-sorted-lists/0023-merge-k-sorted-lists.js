/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let numbers = [];
    
    for (let i=0; i<lists.length; i++) {
        let current = lists[i]
        while (current !== null) {
            numbers.push(current.val)
            current = current.next
        }
    }
    
    if (numbers.length === 0) {
        return null;
    }
    numbers.sort((a, b) => a - b)
    
        let head = new ListNode(numbers[0]);
        let current = head;
    
        for (let i = 1; i < numbers.length; i++) {
        current.next = new ListNode(numbers[i]);
        current = current.next;
    }

    return head;

};