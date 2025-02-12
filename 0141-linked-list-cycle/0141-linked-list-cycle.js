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
    if (!head) {
        return false;
    }
    let visited = new Set();
    let current = head;
    while (current) {
        if (visited.has(current)) {
            return true;
        }

        visited.add(current);
        current = current.next;

    }

    return false;

};