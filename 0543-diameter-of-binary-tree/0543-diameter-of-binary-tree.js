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
    //time complexity is linear O(n)
    //space complexity O(log n) for balanced tree
    //space complexity O(n) for unblanced tree
    let res = 0;

    const dfs = (curr) => {
        if (!curr) {
            return 0;
        }

        let left = dfs(curr.left);
        let right = dfs(curr.right);

        res = Math.max(res, left+right);
        return 1 + Math.max(left,right);
    }
    dfs(root);
    return res;
};