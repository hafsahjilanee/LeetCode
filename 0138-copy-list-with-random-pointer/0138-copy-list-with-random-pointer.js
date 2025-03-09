/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    let oldToNew = new Map();

    let curr = head;
    oldToNew.set(curr, new Node(curr.val));

    while (curr) {
        if (curr.next) {
            if (!oldToNew.has(curr.next)) {
                oldToNew.set(curr.next, new Node(curr.next.val));
            }
            oldToNew.get(curr).next = oldToNew.get(curr.next)
        }

        if (curr.random) {
            if (!oldToNew.has(curr.random)) {
                oldToNew.set(curr.random, new Node(curr.random.val));
            }
            oldToNew.get(curr).random = oldToNew.get(curr.random);
        }

        curr = curr.next;
    }

    return oldToNew.get(head);
};