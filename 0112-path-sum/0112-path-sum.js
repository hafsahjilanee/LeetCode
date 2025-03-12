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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {

    let dfs = (curr, total) => {
        if (!curr) return false; // If the node is null, no path exists.

        total += curr.val; // Add current node's value to the total sum.

        // Check if it's a leaf node and the total matches targetSum.
        if (!curr.left && !curr.right) {
            return total === targetSum;
        }

        // Recursively check left and right subtrees.
        return dfs(curr.left, total) || dfs(curr.right, total);
    };

    return dfs(root, 0);
};