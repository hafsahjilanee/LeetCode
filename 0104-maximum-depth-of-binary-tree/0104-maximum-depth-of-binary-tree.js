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
 * @return {number}
 */
var maxDepth = function(root) {
    let length = 0;

    let dfs = (node) => {
        if (!node) {
            return 0;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        return 1+ Math.max(left, right);
    }

    return dfs(root);
};