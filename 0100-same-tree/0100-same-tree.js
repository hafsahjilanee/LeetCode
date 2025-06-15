/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    //iteratively
    let queue = [[p,q]];

    while (queue.length) {
        const [pTree,qTree] = queue.shift();

        if (pTree===null & qTree===null) continue;

        if (pTree===null || qTree===null) return false;

        if (pTree.val !== qTree.val) return false;

        if (pTree) {
            queue.push([pTree.left, qTree.left]);
            queue.push([pTree.right, qTree.right]);
        }
    }

    return true;
};