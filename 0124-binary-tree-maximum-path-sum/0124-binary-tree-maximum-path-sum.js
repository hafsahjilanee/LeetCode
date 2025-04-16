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
var maxPathSum = function(root) {
    if (!root) return 0;

    let maxPathSum = root.val;

    let dfs = (node) => {
        if (!node) return 0;

        //leaf node
        if (!node.left && !node.right) {
            maxPathSum = Math.max(maxPathSum, node.val);
            return node.val 
        }

        //explore left and right subtrees
        let left = dfs(node.left);
        let right = dfs(node.right);

        //find max sum from this node
        maxPathSum = Math.max(maxPathSum,
        node.val,
        node.val+left+right,
        node.val+left,
        node.val+right);


        return Math.max(node.val,
        node.val+left,
        node.val+right,
        0)  
    }

    dfs(root);
    return maxPathSum;
};