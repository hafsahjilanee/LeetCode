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
    // //tc O(n)
    // //sc O(n)
    // let values = [];

    // let curr = head;
    // let n=0

    // while (curr) {
    //     values.push(curr.val);
    //     curr = curr.next;
    //     n++;
    // };

    // let maxSum = 0;

    // for (let i=0; i<n/2; i++) {
    //     maxSum = Math.max(maxSum, values[i] + values[n-1-i])
    // }

    // return maxSum;

    //tc O(n)
    //sc O(1)

    if (!head) return null;
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    };

    //reverse second half of linked list
    let nextNode;
    let prev = null;

    while (slow) {
        nextNode = slow.next;
        slow.next = prev;
        prev = slow;
        slow = nextNode;
    }

    //prev is now the head of reversed list
    let curr = head;
    let max = 0;
    while (prev) {
        max = Math.max(max, prev.val+curr.val);
        prev = prev.next;
        curr = curr.next;
    }

    return max;
};