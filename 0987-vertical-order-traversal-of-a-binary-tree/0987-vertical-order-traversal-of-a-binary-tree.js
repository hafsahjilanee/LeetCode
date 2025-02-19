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
var verticalTraversal = function(root) {
    if (!root) return [];

    let treeMap = new Map();

    let max = -Infinity;
    let min = +Infinity;

    let q = [[0,0, root]];

    while (q.length) {
        let [x,y,node] = q.shift();

        min = Math.min(min,y);
        max = Math.max(max,y);

        treeMap.set(y, [...(treeMap.get(y) || []), {x, val: node.val}])
        

        if (node.left) {
            q.push([x+1, y-1, node.left]);
        }
        if (node.right) {
            q.push([x+1, y+1, node.right])
        }
    }

    let res = [];
    console.log(treeMap);

    //sample output like 0 => [ { x: 0, val: 3 }, { x: 2, val: 15 } ],
    //we want to sort based on x now
    for (let i=min; i<=max; i++) {
        if (treeMap.get(i).length>1) {
            let sortedByX = treeMap.get(i).sort((a, b) => {
                if (a.x === b.x) return a.val - b.val; // Sort by value if row is the same
                return a.x - b.x; // Otherwise, sort by row index
            });
            let array = sortedByX.map((e)=> e.val);
            res.push(array);
        }
        else {
            res.push(treeMap.get(i).map(e => e.val));
        }
    }

    console.log(res);
    return res;
};