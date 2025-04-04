/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    //TC 0(n log n)
    //SC O(1)

    //min weight is the max of the array bec that is the min that can be selected. 
    //anything less than 10 means, 10 will never be able to be shipped

    //max is gonna be sum of all weights bc thats way everyth can be shipped on a single day
     
     let left = Math.max(...weights);
     let right = weights.reduce((acc, curr) => acc+curr, 0);
     //least acceptable day is 1, cant ship everyth in 0 days
     let daysTaken = 1;

     while (left< right) {
        let mid = Math.floor((left+right)/2);
        daysTaken =1;
        let sum =0;
        for (let w of weights) {
            sum+= w;
            if (sum> mid) {
                daysTaken++;
                sum=w;
            }
        }

        if (daysTaken<=days) {
            right = mid;
        }
        else {
            left = mid+1;
        }
     }
    return left;
};