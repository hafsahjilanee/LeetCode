/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    if (s.length <=1) {
        return 1;
    }

    let left,right;
    let zeroCount, oneCount;
    let res =0;

    for (let i=1; i<s.length; i++) {
        left = s.slice(0,i);
        right = s.slice(i);

        zeroCount = left.split(0).length-1;
        oneCount =  right.split(1).length-1;
        
        res = Math.max(res, zeroCount+oneCount);

    }

    return res;
};