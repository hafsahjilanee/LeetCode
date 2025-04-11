/**
 * // Definition for a _Node.
 * function _Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @param {number} insertVal
 * @return {_Node}
 */
var insert = function (head, insertVal) {
    let newNode = new _Node(insertVal, null);

    //case 1 head is empty null
    if (!head) {
        newNode.next = newNode;
        return newNode;
    }

    let curr = head;

    while (curr.next !== head) {
        if (insertVal >= curr.val && insertVal <= curr.next.val) {
            newNode.next = curr.next;
            curr.next = newNode;
            return head;
        }
        //we know we are at edge if next value is less than curr value
        else if (curr.next.val < curr.val) {
            //for highest value and for lowest value
            if (insertVal >= curr.val || insertVal <= curr.next.val) {
                newNode.next = curr.next;
                curr.next = newNode;
                return head;
            }
        }
        curr = curr.next;
    }

    //last case is circular ll contains all 3 3 3 3 3, in this case we can insert anywhere
    newNode.next = curr.next;
    curr.next = newNode;

    return head;
};