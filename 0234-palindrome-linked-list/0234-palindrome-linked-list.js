/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return null;

    let curr = head;
    let str = '';

    while (curr) {
        str += curr.val;
        curr = curr.next;
    }

    let left = 0;
    let right = str.length -1;

    while (left < right) {
        if (str[left] !== str[right]) return false;

        left++;
        right--;
    }

    return true;
};