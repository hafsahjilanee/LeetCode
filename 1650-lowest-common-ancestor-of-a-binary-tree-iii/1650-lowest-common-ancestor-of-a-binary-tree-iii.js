/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
    //time O(n)
    //space O(1) nc we're not making any data structure to keep track of nodes that grows with loop
    let pCopy = p;
    let qCopy = q;

    while (pCopy !== qCopy) {
        pCopy = pCopy.parent ?? q;
        qCopy = qCopy.parent ?? p;
    }

    return pCopy;
};