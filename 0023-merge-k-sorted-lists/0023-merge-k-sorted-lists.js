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
var mergeKLists = function(lists) {
    //TC O(Nlogk)
    //SC In the worst case, the heap holds all k elements at once => O(k)
    if (!lists.length) return null;

    let minHeap = new PriorityQueue((a,b) => a.val-b.val);

    for (const list of lists) {
        //if condition to check if we ever get an empty list [[]]
       if (list) minHeap.enqueue(list);
    };

    let dummy = new ListNode(-1);
    let curr = dummy;

    while (minHeap.size()>0) {
        let node = minHeap.dequeue();
        curr.next = node;
        curr = node;

        if (node.next) {
            minHeap.enqueue(node.next);
        }
    }

    return dummy.next;
};