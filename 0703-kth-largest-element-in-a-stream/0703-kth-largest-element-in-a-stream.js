/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    //min heap, the root of min heap will always be the k'th largest element
    this.k = k;
    this.heap =[0];
    for (const num of nums) {
        this.add(num);
    }
    
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
   if (this.heap.length<this.k+1) {
    this.heap.push(val);
    this.perlocateUp()
   }
   else if (val > this.heap[1]) {
    this.heap[1] = val;
    this.perlocateDown()
   }

   return this.heap[1];
    
};

KthLargest.prototype.perlocateUp = function() {
    let i = this.heap.length-1;
    let parentIndex = Math.floor(i/2);

    while (parentIndex>0 && this.heap[parentIndex] > this.heap[i]) {
        let tmp = this.heap[i];
        this.heap[i] = this.heap[parentIndex];
        this.heap[parentIndex] = tmp;

        i= parentIndex;
        parentIndex= Math.floor(i/2);
    }
}

KthLargest.prototype.perlocateDown = function() {
    if (this.heap.length===1) {
        return 0;
    }
    if (this.heap.length === 2) {
        return this.heap[1];
    }

    let i =1;

    while (2*i < this.heap.length) {
        if (2*i+1 < this.heap.length && this.heap[2*i+1] < this.heap[2*i] && this.heap[i] > this.heap[2*i+1]) {
            let tmp = this.heap[2*i+1];
            this.heap[2*i+1] = this.heap[i];
            this.heap[i] = tmp;

            i=2*i+1
        }
        else if (this.heap[i] > this.heap[2*i]) {
            let tmp = this.heap[2*i];
            this.heap[2*i] = this.heap[i];
            this.heap[i] = tmp;

            i=2*i;
        }
        else {
            break;
        }
    }
}

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */