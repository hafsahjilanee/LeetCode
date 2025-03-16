var kClosest = function(points, k) {
    if (points.length === k) return points;
    
	// We don't use Math.sqrt() to compute the distance because it makes no 
	// difference when comparing which point is closer to origin
    const distance = ([a, b]) => a ** 2 + b ** 2;
    const swap = (i, j) => [points[i], points[j]] = [points[j], points[i]];
        
    const partition = (points, left, right) => {
		// The last element in the current selection is the random pivot we chose in the main while() loop
        const pivot = points[right];
		
		// left is the start of the current selection
        let i = left;
        
		// We iterate from our current starting point all the way to the pivot
        for (let j = left; j < right; j += 1) {
			// We swap all elements less than the pivot with i and then increment 
			//so that we're sure the smallest elements are all between the start and i
            if (distance(points[j]) < distance(pivot)) {
                if (i !== j) swap(i, j);
                i += 1;
            }
        }
        
		// We swap i with right because right holds the pivot and all elements less than 
		// the pivot are to the left of i  (and all elements higher than the pivot are to the right of i)
        swap(i, right);
		
		// We return the current pivot because the data is now partitioned as follows: 
			// 1. Elements smaller than the pivot are to its left
			// 2. Elements greater than the pivot are to its right
        return i;
    }
    
    let [left, right] = [0, points.length - 1];
    
    while (true) {
		// We select a random pivot and place it at the end of the current selection
        const random = Math.floor(Math.random() * (left - right + 1)) + right;
        swap(random, right);
        
		// We make sure all values less than the pivot are to the left of middle and
		// all values higher are to its right
        const middle = partition(points, left, right);
        
		// if middle === k, then that means that: 
			// 1. all values to the left of middle are less than points[middle]
			// 2. all values to the right of middle are greater than points[middle]
		// and so the smallest k points are from 0 to middle (inclusive)
        if (middle === k) return points.slice(0, k);
		
		// if k < middle then the final answer requires less elements
		// we restrict our selection to [left, middle - 1] because we know the smallest k elements are somewhere in that interval
		// we start the algorithm again with this selection, until k === middle
        if (k < middle) right = middle - 1;
		
		// if k > middle then the final answer requires more elements
		// we already know that the elements to the left of middle are all smaller than those to the right of middle
		// we restrict our selection to [middle + 1, right] because we need the other k - middle smallest elements and
		// those are only available in that interval
		// we start the algorithm again with this selection, until k === middle
        if (k > middle) left = middle + 1;
    }
};