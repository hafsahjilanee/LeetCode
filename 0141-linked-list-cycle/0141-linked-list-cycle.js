/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // //initial solution
    // if (!head) {
    //     return false;
    // }
    // let visited = new Set();
    // let current = head;
    // while (current) {
    //     if (visited.has(current)) {
    //         return true;
    //     }

    //     //store the entire current because if you just store value, there may be repetitions of value in ll which may be misleading
    //     visited.add(current);
    //     current = current.next;

    // }

    // return false;

    //OPTIMIZED SOLUTION
    //O(n) time O(1) space
    let slow= head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow===fast) {
            return true;
        }
    }

    return false;
};