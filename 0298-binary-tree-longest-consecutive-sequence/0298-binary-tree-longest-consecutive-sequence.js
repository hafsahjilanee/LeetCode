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
var longestConsecutive = function(root) {
    if (!root) return 0;
    let maxLength = 0;
    
    let dfs = (curr, parentVal, length) => {
        if (!curr) return;

        length = (curr.val === parentVal+1) ? length+1 : 1;

        maxLength = Math.max(maxLength, length);

        dfs(curr.left, curr.val, length);
        dfs(curr.right, curr.val, length);
    }

    dfs(root, root.val-1, 0);

    return maxLength;
};