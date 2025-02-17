/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    //time complexity at O(n) and space od O(1) bec variables dont grow with loop size

    if (!head || !head.next) return null;
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) {
        prev= slow;
        slow = slow.next;
        fast = fast.next.next
    }

    //after while loop slow is at middle of linked list
    //now delete middle
    prev.next = slow.next;
    return head;
    
};