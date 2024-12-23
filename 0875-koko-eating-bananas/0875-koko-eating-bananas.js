/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left=1;
    let right = Math.max(...piles);
    let middle;
    let hoursTaken;
    
    while (left <= right) {
        middle = Math.floor((left+right)/2);
        hoursTaken = piles.reduce((accumulator, currentValue) => accumulator + Math.ceil(currentValue/middle), 0);
       
        if (hoursTaken<=h) {
            right = middle-1;
        }
        else {
            left = middle+1;
        }
    }
    
    return left;
};