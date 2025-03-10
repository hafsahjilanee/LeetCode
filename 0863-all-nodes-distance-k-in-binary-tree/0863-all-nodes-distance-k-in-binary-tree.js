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
var distanceK = function(root, target, k) {
    if (k === 0) return [target.val];

    let q = [root];
    let graph = new Map();

     while (q.length) {
        let node = q.shift();

        if (node.left) {
            if (!graph.has(node)) graph.set(node, []);
            if (!graph.has(node.left)) graph.set(node.left, []);
            graph.get(node).push(node.left);
            graph.get(node.left).push(node);
            q.push(node.left);
        }
        if (node.right) {
            if (!graph.has(node)) graph.set(node, []);
            if (!graph.has(node.right)) graph.set(node.right, []);
            graph.get(node).push(node.right);
            graph.get(node.right).push(node);
            q.push(node.right);
        }
    }

    let res = [];
    let visited = new Set([target]);
    //[target, distance from target]
    q = [[target,0]];

    while (q.length) {
        let [node, distance] = q.shift();

        if (distance===k) res.push(node.val);
        else {
            if (graph.has(node)) {
                for (const edge of graph.get(node)) {
                    if (!visited.has(edge)) {
                        visited.add(edge);
                        q.push([edge, distance + 1]);
                    }
                }
            }
        }

    }

    return res;

};