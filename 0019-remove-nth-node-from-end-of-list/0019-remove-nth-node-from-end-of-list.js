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
    //tc o(n)
    //sc O(1)
    //we need dummy for the case the node we need to remove is the head node
    let dummy = new ListNode(-1, head);
    let left = dummy;
    let right = head;

    //ensure distance between left and right is 2
    while (n>0 && right) {
        right = right.next;
        n--;
    }

    while (right) {
        right = right.next;
        left = left.next;
    }

    left.next = left.next.next;

    return dummy.next;
};