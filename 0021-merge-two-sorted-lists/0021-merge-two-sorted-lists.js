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
    if (!list1) return list2;
    if (!list2) return list1;

    let dummy = new ListNode(-1);
    let curr = dummy;

    while (list1 && list2) {
        if (list1.val<list2.val) {
            curr.next = list1;
            curr = list1;
            list1 = list1.next;
        }
        else {
            curr.next = list2;
            curr = list2;
            list2 = list2.next;
        }
    }

    if (list1) {
        curr.next = list1
    }

    if (list2) {
        curr.next = list2;
    }

    return dummy.next;
};