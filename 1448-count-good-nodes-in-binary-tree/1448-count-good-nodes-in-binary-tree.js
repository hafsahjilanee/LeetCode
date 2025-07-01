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
var goodNodes = function(root) {
    //we need to maintain max separately for each recursive stack s
    let x = root.val;
    let count = 0;

    let dfs = (curr, max) => {
        if (!curr) {
            return;
        }
        else if (curr.val>=max) {
            count++;
            max = curr.val;
        }

        dfs(curr.left,max);
        dfs(curr.right,max);

    }
    //do not call with max 0, initialize max to root.val
    dfs(root,root.val);
    return count;
};