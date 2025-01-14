/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    const createSubset=(i, subset, total) => {
        if (total === target) {
            res.push([...subset]);
            return;
        }
        
        if (i>=candidates.length || total>target) {
            return;
        };

        subset.push(candidates[i]);

        //backtracking case include
        createSubset(i, subset, total+candidates[i])
        subset.pop();
        //backtracking case not include
        createSubset(i+1, subset, total);

    }
    createSubset(0,[],0);
    return res;
};