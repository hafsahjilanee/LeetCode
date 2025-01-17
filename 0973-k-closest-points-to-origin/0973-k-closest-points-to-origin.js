/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    const minPQ = new MinPriorityQueue({
    priority: (item) => item[0] // Use the distance (first element, distance) as the priority
});
    let val, roundedResult;
    for (const point of points) {
       distance = point[0]**2+point[1]**2;
       minPQ.enqueue([distance, point]);
    }

    let i =0;
    let res = [];
    while (i<k) {
        res.push(minPQ.dequeue().element[1]);
        i++;
    }
    
    return res;

};