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
var sumNumbers = function(root) {
    let total = 0;

    const dfs = (curr, numString) => {
        if (!curr) {
            return;
        }
        
        numString+=curr.val;

        if (!curr.left && !curr.right) {
            total += parseInt(numString)
        }

        let left = dfs(curr.left, numString);
        let right = dfs(curr.right, numString);
    }

    dfs(root, '');

    return total;
};