/**
 * @param {number[]} w
 */
var Solution = function(w) {
    //TC O(n)
    //O(n)
    this.w = w;
    this.cumulativeWeight = [];
    this.totalWeight = 0;

    for (let weight of w) {
        this.totalWeight += weight;
        this.cumulativeWeight.push(this.totalWeight);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    //TC O(log n)
    //SC O(1)
    //get random weight
    let random = Math.random() * this.totalWeight;

    //find probability of random weight
    let left = 0;
    let right = this.cumulativeWeight.length-1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);

        if (random > this.cumulativeWeight[mid]) {
            left = mid+1;
        }
        else {
            right = mid
        }
    }

    return left;


};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */