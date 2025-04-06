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
    //TC O(n)
    //space O(h)
    if (!root) return 0;
    //LRC post order traversal
    let max =0;
    let dfs = (curr) => {
        if (!curr) return 0;

        let left = dfs(curr.left);
        let right = dfs(curr.right);

        max = Math.max(max, left+right);

        return 1 + Math.max(left,right)
    }

    dfs(root);
    return max;



};