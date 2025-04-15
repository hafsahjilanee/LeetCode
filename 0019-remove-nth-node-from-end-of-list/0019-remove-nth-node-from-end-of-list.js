/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //TC O(n)
    //SC O(1)
    //using fast and slow pointer aka two pointers 
    let dummy = new ListNode(-1, head);
    let left = dummy;
    let right = head;
    while (n>0 && right) {
        //this will ensure that the difference between slow and fast is always 2 
        right = right.next;
        n--;
    }

    while (right) {
        left = left.next;
        right = right.next; 
    }

    //delet the node 
    left.next = left.next.next; 
    return dummy.next;
     
};