/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} s
 * @return {TreeNode}
 */
var str2tree = function(s) {
    if (!s) return null;

    let stack = [];
    let i=0;

    while (i<s.length) {
        let char = s[i];

        if (char === '-' || !isNaN(char)) {
            let sign = 1;
            if (char === '-') {
                sign = -1;
                i++;
            }

            let val = 0;
            while (i < s.length && !isNaN(s[i])) {
                val = val * 10 + parseInt(s[i]);
                i++;
            }
            i--;
            stack.push(new TreeNode(sign * val));
        }
        else if (char === ')') {
            let top = stack.pop();
            
            if (!stack[stack.length-1].left) {
                stack[stack.length-1].left = top;
            }
            else {
                stack[stack.length-1].right = top;
            }   
        }
        i++;
    }
    return stack[stack.length-1]; 
};