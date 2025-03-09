/**
 * // Definition for a _Node.
 * function _Node(val, left, right, random) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.random = random === undefined ? null : random;
 * };
 */

/**
 * @param {_Node} root
 * @return {NodeCopy}
 */
var copyRandomBinaryTree = function(root) {
    if (!root) return null;

    let oldToNew = new Map();
    let q = [];
    q.push(root);
    oldToNew.set(root, new NodeCopy(root.val));

    while (q.length) {
        let curr = q.shift();
        let newNode = oldToNew.get(curr);

        if (curr.random) {
            if (!oldToNew.has(curr.random)) {
                oldToNew.set(curr.random, new NodeCopy(curr.random.val));
                q.push(curr.random);
            }

            newNode.random = oldToNew.get(curr.random);
        }

        if (curr.left) {
            if (!oldToNew.has(curr.left)) {
                oldToNew.set(curr.left, new NodeCopy(curr.left.val));
                q.push(curr.left);
            }

            newNode.left = oldToNew.get(curr.left);
        }

        if (curr.right) {
            if (!oldToNew.has(curr.right)) {
                oldToNew.set(curr.right, new NodeCopy(curr.right.val));
                q.push(curr.right);
            }

            newNode.right = oldToNew.get(curr.right);
        }
    }

    return oldToNew.get(root);
};