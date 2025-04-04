/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1;
    let right = Math.max(...piles);
    let hoursTaken = 0;

    while (left < right) {
        hoursTaken=0;
        let mid = Math.floor((left+right)/2);

        for (let pile of piles) {
            hoursTaken += Math.ceil(pile/mid);
        }
        //if hours taken are less than h e.g 6<=8, then move to left to find smallest value
        //we want to set right to mid instead of mid-1 bc maybe mid might be the lowest correct val
        if (hoursTaken <= h) {
            right = mid;
        }
        //if hourstaken is greater than h 10>8 then do mid+1 bc we already know mid is too big discard it
        else {
            left = mid+1;
        }
    }

    return left;
};