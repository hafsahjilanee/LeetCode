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
var levelOrder = function(root) {
    let current = root;
    const res = [];
    let queue = new Queue();
    let level=[];
    
    if (!root) {
        return res;
    }

    queue.push(root);

    while (!queue.isEmpty()) {
        //queue size makes sure we are going one level at a time
        level = [];
        let qLen = queue.size();
        //store the queue size bec it is dynamic and we want the loop to run for only 1 level at a time
        for (let i =0; i<qLen; i++) {
            let node = queue.pop();
            level.push(node.val)
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        res.push(level);
    }
    return res;

};