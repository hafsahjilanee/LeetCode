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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let closest = root.val;

    let curr = root;

    while (curr !==null) {
        if (Math.abs(curr.val-target)<Math.abs(closest-target)) {
            closest = curr.val;
        }
        //e.g you have 4.5 so 4 and 5 are equally closer but you will go with 4
        else if (Math.abs(curr.val-target)===Math.abs(closest-target)) {
            closest = Math.min(closest, curr.val)
        }

        if (target>curr.val) {
            curr = curr.right;
        }
        else {
            curr = curr.left;
        }
    }

    return closest;
};