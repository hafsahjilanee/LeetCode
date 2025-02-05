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
    let oldToNew = new Map();

    let dfs = (node) => {
        if (!node) {
            return null
        }

        if (oldToNew.has(node)) {
            return oldToNew.get(node);
        }

        const copy = new _Node(node.val);
        oldToNew.set(node, copy);

        for (const nei of node.neighbors) {
            copy.neighbors.push(dfs(nei));
        }

        return copy;

    }

    return dfs(node,oldToNew);
};