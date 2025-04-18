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
var verticalTraversal = function (root) {
    if (!root) return [];

    let q = [];
    q = [[0, 0, root]];

    let map = new Map();
    let min = +Infinity;
    let max = -Infinity;

    while (q.length) {
        let [row, col, node] = q.shift();

        min = Math.min(min, col);
        max = Math.max(max, col);

        map.set(col, [...(map.get(col) || []), [row,node.val]]);

        if (node.left) {
            q.push([row + 1, col - 1, node.left]);
        }
        if (node.right) {
            q.push([row + 1, col + 1, node.right]);
        }
    }

    let res = [];
    for (let i = min; i <= max; i++) {
        if (map.has(i)) {
            // Sort nodes in the same column
            let columnNodes = map.get(i).sort((a, b) => {
                if (a[0] !== b[0]) return a[0] - b[0]; // Sort by x (row)
                return a[1] - b[1]; // If same x, sort by node value
            });

            // Extract only the node values
            let columnValues = columnNodes.map(([row, val]) => val);
            res.push(columnValues);
        }
    }

    return res;

};