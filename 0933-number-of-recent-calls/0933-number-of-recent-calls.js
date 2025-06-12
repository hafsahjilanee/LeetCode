
var RecentCounter = function() {
    this.q = [];
    this.counter = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    let min = this.q.length ? this.q[0] : 0;

    this.q.push(t);

    if (Math.abs(t- min) >3000) {
        this.q.shift();
    }

    return this.q.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */