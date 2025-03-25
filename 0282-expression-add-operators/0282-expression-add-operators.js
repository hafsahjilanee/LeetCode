/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
    //backtracking + dfs
    let res = [];

    const dfs = (currIndex, currResult, currSum, prev) => {
        if (currIndex === num.length) {
            if (currSum === target) {
                res.push(currResult);
                return;
            }
        }
        else {
            //build out all possible values so say we have 123
            //can have 1 or 12 or 123
            for (let i =currIndex; i<num.length; i++) {
                let currStr = num.slice(currIndex, i+1);
                let currNum = parseInt(currStr);

                // Skip numbers with leading zeros (e.g., "05" is invalid)
                if (currStr.length > 1 && currStr[0] === '0') break;

                if (currIndex === 0) {
                    dfs(i+1, currStr, currNum, currNum)
                }
                else {
                    dfs(i+1, currResult + '+' + currStr, currSum+currNum, currNum);
                    dfs(i+1, currResult + '-' + currStr, currSum-currNum, -currNum);
                    //for multiply you have to undo last operation
                    //1+2*3
                    //currSum- prev + currNum  * prev
                    //3-2+3*2
                    dfs(i+1, currResult + '*' + currStr, currSum - prev + prev * currNum, prev * currNum);
                }
            }
        }
    }
    
    dfs(0,"",0,0);
    return res;
};