/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    //O(n^2) approach
    //time limit will exceed so let's move to optimized approach

    // let sortedEnvelopes = envelopes.sort((a,b) => a[0]===b[0] ? b[1]-a[1] : a[0]-b[0]);
    // let bucket = new Array(envelopes.length).fill(1);
    // let maxCount = 1;
    
    // for (let i=1; i<sortedEnvelopes.length; i++) {
    //     for (let j=0; j<i; j++) {
    //         if (sortedEnvelopes[i][0]> sortedEnvelopes[j][0] && sortedEnvelopes[i][1] > sortedEnvelopes[j][1]) {
    //             bucket[i] =  Math.max(bucket[i], bucket[j] + 1);
    //         }
    //         maxCount = Math.max(maxCount, bucket[i]);   
    //     }
    // }

    // return maxCount;

    /////////////////////////////////////////////////////////////////////////////
    let sortedEnvelopes = envelopes.sort((a,b)=> a[0]===b[0] ? b[1]-a[1] : a[0]-b[0]);
    //tracks the inc subsequence
    let dp = [];
    for (let env of sortedEnvelopes) {
        let height = env[1];
        let left = 0;
        let right = dp.length;

        while (left<right) {
            let mid = Math.floor((left+right)/2);
            if (dp[mid] < height) {
                left = mid+1;
            }
            else {
                right = mid;
            }
        }

        if (left === dp.length) {
            dp.push(height);
        }
        else {
            dp[left] = height;
        }
    }

    return dp.length;
};