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
var verticalOrder = function(root) {
    if (!root) return [];

    let q = [];
    let map = new Map();
    q.push([0,root]);

    let min = +Infinity;
    let max = -Infinity;

    while (q.length) {
        let [x,node] = q.shift();

        map.set(x, [...(map.get(x)||[]), node.val]);

        max = Math.max(max, x);
        min = Math.min(min, x);

        if (node.left) {
            q.push([x-1, node.left]);
        }
        if (node.right) {
            q.push([x+1, node.right]);
        }
    }

    let res = [];
    for (let i=min; i<=max; i++) {
        res.push(map.get(i));
    }

    return res;
};