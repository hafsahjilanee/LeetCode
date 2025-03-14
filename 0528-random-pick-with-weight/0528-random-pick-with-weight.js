/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.cumulativeWeights = [];
    this.totalWeight = 0;

    for (let i of w) {
        this.totalWeight += i;
        this.cumulativeWeights.push(this.totalWeight);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let r = Math.random() * this.totalWeight;

    let left = 0;
    let right = this.cumulativeWeights.length -1;

    while (left<right) {
        let mid = Math.floor((left+right)/2);

        if (this.cumulativeWeights[mid]<r) {
            left = mid+1
        }
        else {
            right = mid;
        }
    }

    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */