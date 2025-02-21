/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let stack = [];

    while (true) {
        while (root) {
            //go as farthest to the left
            stack.push(root);
            root=root.left;
        }

        //pop element 1 by 1
        root = stack.pop();
        k--;

        if(k===0) {
            return root.val;
        };

        root = root.right;
    }
};