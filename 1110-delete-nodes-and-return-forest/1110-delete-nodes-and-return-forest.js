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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
    //tc 0(n) + o(d) where d is number of elements in to_delete
    //sc 0(d) + O(n) where n is number of elements in tree
    let toDelete = new Set(to_delete);
    let forest = [];

    let dfs = (node, isRoot) => {
        if (!node) return;

        if (toDelete.has(node.val)) {
            dfs(node.left, true);
            dfs(node.right, true);
        }
        else {
            if (node.left) {
                if (toDelete.has(node.left.val)) {
                    dfs(node.left, true);
                    node.left = null;
                }
                else {
                    dfs(node.left, false)
                }
            }
            if (node.right) {
                if (toDelete.has(node.right.val)) {
                    dfs(node.right, true);
                    node.right = null;
                }
                else {
                    dfs(node.right, false);
                }
            }
            if (isRoot) {
                forest.push(node);
            }
        }
    }

    dfs(root, true);
    return forest;
};