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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    let prefixSum = new Map(); //to keep prefixSum
    prefixSum.set(0,1) // to count from beginning

    let dfs = (node, sum) => {
        if (!node) return;

        sum += node.val;

        if (prefixSum.has(sum-targetSum)) {
            count += prefixSum.get(sum-targetSum);
        }

        prefixSum.set(sum, (prefixSum.get(sum) || 0)+1);

        dfs(node.left, sum);
        dfs(node.right, sum);

        // backtrack: remove current sum from map to avoid affecting other branches
        prefixSum.set(sum, prefixSum.get(sum) - 1);
    }

    dfs(root, 0);
    return count;
};