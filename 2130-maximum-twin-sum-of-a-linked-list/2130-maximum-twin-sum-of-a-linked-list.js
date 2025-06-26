/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
    let values = [];

    let curr = head;
    let n=0

    while (curr) {
        values.push(curr.val);
        curr = curr.next;
        n++;
    };

    let maxSum = 0;

    for (let i=0; i<n/2; i++) {
        maxSum = Math.max(maxSum, values[i] + values[n-1-i])
    }

    return maxSum;
};