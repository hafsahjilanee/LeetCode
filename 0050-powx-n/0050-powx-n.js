/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
//time O(log n) bc we are dividing input by half in each iteration
//space is O(1)   
    if (n===0) return 1;

    if (n<0) {
        x=1/x;
        n=-n;
    }
    let res =1;
    while (n>0) {
        if (n%2 === 1) {
            res *=x;
        }
        x*=x;
        n = Math.floor(n/2)

    }
    return res;
};