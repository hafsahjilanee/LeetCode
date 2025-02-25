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
    let curr = root;
    while (true) {
        if ((curr.val === p.val)|| (curr.val === q.val)) {
            return curr;
        }

        if ((p.val<curr.val && q.val>curr.val) || (p.val>curr.val && q.val<curr.val)) {
            return curr;
        }
        else if (p.val< curr.val && q.val<curr.val) {
            curr = curr.left;
        }
        else {
            curr = curr.right;
        }

    }
};