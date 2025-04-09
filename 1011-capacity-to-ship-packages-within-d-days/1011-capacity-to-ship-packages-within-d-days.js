/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights);
    let right = weights.reduce((acc,curr)=> acc+curr, 0);
    let daysTaken = 1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);
        let sum = 0;
        daysTaken = 1
        for (let weight of weights) {
            sum+= weight;
            if (sum>mid) {
                sum = weight;
                daysTaken++;
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