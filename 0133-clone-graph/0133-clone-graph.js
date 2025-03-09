/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function(node) {
    if (!node) return null;

    let oldToNew = new Map();
    oldToNew.set(node, new Node(node.val));

    let q = [];
    q.push(node);

    while (q.length) {
        let curr = q.shift();

        for (let nei of curr.neighbors) {
            if (!oldToNew.has(nei)) {
                q.push(nei);
                oldToNew.set(nei, new Node(nei.val))
            }

            oldToNew.get(curr).neighbors.push(oldToNew.get(nei));
        }
    }

    return oldToNew.get(node);


};