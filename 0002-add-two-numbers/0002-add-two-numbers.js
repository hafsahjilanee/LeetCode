/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode();
    let curr = head;
    let sum, carry =0;
    let v1, v2;
    while (l1 || l2 || carry) {
        // node values
        v1 = l1 ? l1.val : 0;
        v2 = l2 ? l2.val : 0;
        
        //sum
        sum = v1+v2+carry;
        carry = Math.floor(sum/10);

        //LINK NEXT NODE TO CURRENT NODE
        curr.next = new ListNode(sum%10);
        curr = curr.next;

        // update ptrs
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        
    }

    return head.next;
};