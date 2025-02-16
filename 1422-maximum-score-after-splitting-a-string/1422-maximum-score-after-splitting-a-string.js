/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    //OPTIMIZED TO O(n) time and O(n) space

    let oneCount = s.split(1).length - 1;
    let zeroCount = 0;
    let res =0;

    //we do not want to include last element and we want to stop before then hence -1
    for (let i=0; i<s.length-1; i++) {
        if (s[i] === '0') {
            zeroCount +=1;
        }
        else {
            oneCount -= 1;
        }
console.log('zerocOUNT AND ONE', zeroCount, oneCount);
        res = Math.max(res, zeroCount+oneCount);
    }

    return res;




    // if (s.length <=1) {
    //     return 1;
    // }

    // let left,right;
    // let zeroCount, oneCount;
    // let res =0;

    // for (let i=1; i<s.length; i++) {
    //     //time complexity O(n^2)
    //     //space complexity O(n)
    //     left = s.slice(0,i);
    //     right = s.slice(i);

    //     zeroCount = left.split(0).length-1;
    //     oneCount =  right.split(1).length-1;
        
    //     res = Math.max(res, zeroCount+oneCount);

    // }

    // return res;
};