/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pFound = false;
    let qFound = false;

    const dfs = (curr) => {
        if (!curr) {
            return null;
        }

        let left = dfs(curr.left);
        let right = dfs(curr.right);

        if (curr === p) {
            pFound = true;
            return curr;

        }

        if (curr === q) {
            qFound = true;
            return curr;
        }

        if (left && right) {
            return curr;
        }

        return left ?? right
    }

    let lca = dfs(root);
    return (pFound && qFound) ? lca : null;
};