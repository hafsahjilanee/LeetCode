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
    if (!root) return 0;
//post order traversal
//explore left, right and then current LRC
//time O(n)
//space O(H) => height of subtree is the call stack depth
    let diameter = 0;
    let dfs = (curr) => {
        if (!curr) {
            return 0;
        }

        let left = dfs(curr.left);
        let right = dfs(curr.right);

        diameter = Math.max(diameter, left+right);
        return 1+ Math.max(left, right);
    }
    
    dfs(root)
    return diameter;
};