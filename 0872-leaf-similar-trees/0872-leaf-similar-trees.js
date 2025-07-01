/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let values1 = [];
    let values2= [];
    if (!root1 &&root2 || !root2 && root1) return false;

    let dfs = (node, arr) => {
        if (!node) return;

        if (!node.left && !node.right) arr.push(node.val);

        dfs(node.left, arr);
        dfs(node.right, arr);
    }

    dfs(root1, values1);
    dfs(root2, values2);
    console.log(JSON.stringify(values1))
    return JSON.stringify(values1) === JSON.stringify(values2);
};