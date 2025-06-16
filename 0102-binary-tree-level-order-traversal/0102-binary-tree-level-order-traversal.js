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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let q = [root];
    let res = [];
    let arr = [];

    while (q.length) {
        let length = q.length;
        arr = [];

        for (let i = 0; i < length; i++) {
            let node = q.shift();

            arr.push(node.val);

            if (node.left) q.push(node.left);
            if (node.right) q.push(node.right);
        }

        res.push(arr);
    }

    return res;
};