/**
 * @param {number[]} w
 */
var Solution = function(w) {
    //TC O(log n)
    //SC O(1)
    this.cumulativeWeights = [];
    this.totalWeight = 0;
    this.w = w;

    for (let item of w) {
        this.totalWeight += item;
        this.cumulativeWeights.push(this.totalWeight);
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    //generate number between 0 and w.length-1
    let r = Math.floor(Math.random() * this.totalWeight);

    let left = 0;
    let right = this.w.length-1;

    while (left < right) {
        let mid = Math.floor((left+right)/2);

        if (this.cumulativeWeights[mid] <= r) {  // Fix: Use `<=` for inclusivity.
            left = mid + 1;
        } else {
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