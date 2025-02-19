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
var verticalOrder = function (root) {
    //TIME COMPLEXITY O(N)
    //SPACE COMPLEXITY O(N)
    if (!root) return [];

    let map = new Map();

    //initialize queue with 0 as x corrdinate and root
    let q = [[0, root]];
    let qlen;

    let min = +Infinity;
    let max = -Infinity;

    while (q.length) {
        qlen = q.length;

        //POP FROM THE BEGINNING OF THE QUEUE
        let [x, node] = q.shift();

        map.set(x, [...(map.get(x) || []), node.val]);

        min = Math.min(min, x);
        max = Math.max(max, x);

        if (node.left) {
            q.push([x - 1, node.left])
        }
        if (node.right) {
            q.push([x + 1, node.right]);
        }
    }

    let res = [];
    for (let i=min; i<=max; i++) {
        res.push(map.get(i));
    }
    return res;


};