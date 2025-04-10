/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    //TC O(n + m) Iterates through both lists once.
    //SC O(1) Only a few pointers are used (dummy, curr).
    if (!list1) return list2;
    if (!list2) return list1;

    let dummy = new ListNode(-1);
    let curr = dummy;

    while (list1 && list2) {
        if (list1.val<list2.val) {
            curr.next = list1;
            list1 = list1.next;
        }
        else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    // Attach the remaining nodes
    curr.next = list1 || list2;

    return dummy.next;
};