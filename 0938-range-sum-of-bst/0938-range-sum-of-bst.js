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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    //TC O(n) where n is the number of nodes in the BT
    //SC O(h) where h is the height of the BT
    let sum = 0;
    let dfs = (curr) => {
        if (!curr) return;

        if(curr.val>=low && curr.val<=high) {
            sum+= curr.val;
        }

        // BST property allows pruning
        if (curr.val > low) dfs(curr.left);
        if (curr.val < high) dfs(curr.right);
    }

    dfs(root,0);
    return sum;
};