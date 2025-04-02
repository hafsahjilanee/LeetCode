var kClosest = function(points, k) {
    const minPQ = new MinPriorityQueue((item) => item[0]);
    let val, roundedResult;
    for (const point of points) {
       distance = point[0]**2+point[1]**2;
       minPQ.enqueue([distance, point]);
    }

    let i =0;
    let res = [];
    while (i<k) {
        res.push(minPQ.dequeue()[1]);
        i++;
    }
    
    return res;

};
