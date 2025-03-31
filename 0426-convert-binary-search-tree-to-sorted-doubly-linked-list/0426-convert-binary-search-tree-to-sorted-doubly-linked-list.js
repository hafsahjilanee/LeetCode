/**
 * // Definition for a _Node.
 * function _Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var treeToDoublyList = function(root) {
    //TC O(N) we have to touch each node
    //SC size of recursive stack O(h) where h is tree height

    //in order traversal LCR
    if (!root) return null;
    let first = null;
    let last = null;

    let inOrderLink = (node) => {
        if (!node) return

        inOrderLink(node.left);

        if (!last) {
            //first node of ll
            first = node;
        }
        else {
            node.left = last;
            last.right = node;
        }

        last = node;
        inOrderLink(node.right);
    }

    inOrderLink(root);

    first.left = last;
    last.right = first;

    return first;
};