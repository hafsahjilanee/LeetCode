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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let res = [];
    if(!root) {
        return res;
    }
    let current = root;

    let queue = new Queue();
    let level = [];
    
    queue.push(root);
    let node;

    while (!queue.isEmpty()) {
        let qLen = queue.size();
        for (let i=0; i<qLen; i++) {
            node = queue.pop();
            level.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }

        }
        res.push(level.pop());
    }
    
    return res;
    
};