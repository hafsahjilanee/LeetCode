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
var inorderTraversal = function(root) {
////////////////////////RECURSIVE SOLUTION
//     let result = [];
//     if (!root) {
//         return [];
//     }

//     return traversal(root, result);
// };

// const traversal = (root, result) => {
//     if (!root) {
//         return;
//     }

//     traversal(root.left, result);
//     result.push(root.val);
//     traversal(root.right, result);

//     return result;


//////////////////////////ITERATIVE SOLUTION
    let current = root;
    let result = [];
    let stack = [];

    while (current || stack.length>0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }

        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}
