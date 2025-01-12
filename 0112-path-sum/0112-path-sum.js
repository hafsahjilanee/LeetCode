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
//backtracking used
    const checkPathSum = (root, total) => {
        if (!root) {
            return false;
        }
        total+=root.val;

        if (!root.left && !root.right) {
            if (total === targetSum){
                return true;
            }
        }
        if (checkPathSum(root.left, total)) {
            return true;
        }
        if (checkPathSum(root.right, total)) {
            return true;
        }
        total -=root.val;
        return false;
    }

    return checkPathSum(root, 0);
};