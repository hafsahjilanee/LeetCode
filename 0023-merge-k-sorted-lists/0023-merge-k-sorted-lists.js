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

var mergeKLists = function (lists) {
    if (!lists || lists.length === 0) return null;
    const minHeap = new PriorityQueue((a, b) => a.val - b.val);

    for (let list of lists) {
        if (list) minHeap.enqueue(list);
    }

    let dummy = new ListNode(0);
    let curr = dummy;

    while (minHeap.size() > 0) {
        let node = minHeap.dequeue();
        curr.next = node;
        curr = curr.next;
        if (node.next) minHeap.enqueue(node.next);
    }

    return dummy.next;
};