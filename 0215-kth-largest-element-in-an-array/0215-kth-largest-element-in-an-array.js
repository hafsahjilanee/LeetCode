/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    //heap operation enqueue dequeue is O(n log k) time, where k is numbe of largest elements we keeping at a time
    //iterating through nums On
    //total time O(n log k) time
    //space O(k) bc the heap only stores k elements at a time

    let q = new MinPriorityQueue();

    for (let num of nums) {
        q.enqueue(num);

        if (q.size() > k) {
            q.dequeue();
        }
    }

    return q.front();

    //TRYING WITH QUICK SELECTTT
    // let kIndex = nums.length - k //position at which our largest element is located

    // //if kIndex === pivotIndex return nums[pivotIndex]

    // const quickSelect = (l, r) => {
    //     let pivot = nums[r];
    //     let p = l;

    //     //we do nums.length-1 bc we have to skip the last index
    //     for (let i=l; i<r; i++) {
    //         if(nums[i]<=pivot) {
    //             //swap
    //             [nums[i],nums[p]] = [nums[p], nums[i]];
    //             p++;
    //         }
    //     }
    //     //now swap p with pivot
    //     [nums[p], nums[r]] = [nums[r], nums[p]];

    //     if (p===kIndex) {
    //         return nums[p];
    //     }
    //     else if (p<kIndex) { //search right partition
    //         return quickSelect(p+1,r);
    //     }
    //     else {
    //         return quickSelect(l,p-1);
    //     }

    // }

    // return quickSelect(0, nums.length-1)

    // let kIndex = nums.length - k; // Convert k-th largest to index

    // const quickSelect = (l, r) => {
    //     if (l >= r) return nums[l]; // Base case
        
    //     let pivot = nums[r]; // Choose last element as pivot
    //     let lt = l;  // Pointer for less than pivot
    //     let gt = r;  // Pointer for greater than pivot
    //     let i = l;

    //     while (i <= gt) {
    //         if (nums[i] < pivot) {
    //             [nums[i], nums[lt]] = [nums[lt], nums[i]];
    //             lt++;
    //             i++;
    //         } else if (nums[i] > pivot) {
    //             [nums[i], nums[gt]] = [nums[gt], nums[i]];
    //             gt--;
    //         } else {
    //             i++; // Skip when nums[i] == pivot
    //         }
    //     }

    //     // Now, check where kIndex lies
    //     if (kIndex >= lt && kIndex <= gt) {
    //         return nums[kIndex];
    //     } else if (kIndex < lt) {
    //         return quickSelect(l, lt - 1); // Search left
    //     } else {
    //         return quickSelect(gt + 1, r); // Search right
    //     }
    // };

    // return quickSelect(0, nums.length - 1);
};