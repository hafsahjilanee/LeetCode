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
var diameterOfBinaryTree = function(root) {
    //tc o(n) bc we reach each node once
    //sc O(n) for skewed and O(log n) for balanced
    if (!root) return 0;
    let max = 0;

    let dfs = (node) => {
        if (!node) return 0;

        let left = dfs(node.left);
        let right = dfs(node.right);

        max = Math.max(max, left+right);

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return max;
};