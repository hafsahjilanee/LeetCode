/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var inorderSuccessor = function (node) {
    //tc o(h)
    //sc 0(1)
    let curr = node;
    //check if right subtree
    if (curr.right) {
        curr = curr.right;
        while (curr.left) {
            curr = curr.left;
        }
        return curr;
    }

    //This loop walks up the tree until it finds a node that is a left child.
    //That’s because the first ancestor that treats curr as its left child is the next node visited in ////in-order traversal.
    while (curr.parent && curr === curr.parent.right) {
        curr = curr.parent
    }

    return curr.parent || null;
};