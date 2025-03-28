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
var treeToDoublyList = function (root) {
    //TC O(N) we have to touch each node
    //SC size of recursive stack O(h) where h is tree height

    //in order traversal LCR
    if (!root) return null;

    //keep track of first element and last element so you can link both of them in the end
    this.first = null;
    this.last = null;

    const inorderLink = (node) => {
        //we need to get to left most node in our tree
        if (!node) return;  // Base case: stop if node is null

        // Recurse left
        inorderLink(node.left);

        // Process current node
        if (!last) {
            // First node in traversal (smallest element)
            first = node;
        } else {
            // Link current node with previous node
            node.left = last;
            last.right = node;
        }
        last = node;

        // Recurse right
        inorderLink(node.right);
    }

    inorderLink(root);

    this.first.left = this.last;
    this.last.right = this.first;

    return this.first;
};
