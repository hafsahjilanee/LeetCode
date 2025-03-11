/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function (root, target, k) {
    let map = new Map();
    let q = [];
    q.push(root);

    while (q.length) {
        let node = q.shift();

        if (node.left) {
            map.set(node.val, [...(map.get(node.val) || []), node.left]);
            map.set(node.left.val, [...(map.get(node.left.val) || []), node]);
            q.push(node.left);
        }
        if (node.right) {
            map.set(node.val, [...(map.get(node.val) || []), node.right]);
            map.set(node.right.val, [...(map.get(node.right.val) || []), node])
            q.push(node.right)
        }
    }

    q.push([target, 0]);
    let res = [];
    let visited = new Set();

    while (q.length) {
        let [node, distance] = q.shift();

        if (distance === k) {
            res.push(node.val);
        }

        visited.add(node);

        if (map.has(node.val)) {
            for (let edge of map.get(node.val)) {
                if (!visited.has(edge)) {
                    q.push([edge, distance + 1]);
                }
            }
        }

    }

    return res;
};