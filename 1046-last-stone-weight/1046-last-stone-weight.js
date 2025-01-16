/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // max heap aka priority queue
    //making heap will have 
    //heapify
    const maxPQ = new MaxPriorityQueue();
    
    for (const stone of stones) {
        maxPQ.enqueue(stone);
    }

    let stone1, stone2;
    while (maxPQ.size()>1) {
        stone1= maxPQ.dequeue().element;
        stone2= maxPQ.dequeue().element;

        if (stone1!==stone2) {
            maxPQ.enqueue(stone1-stone2);
        }
    }
    return maxPQ.size() === 1 ? maxPQ.dequeue().element : 0;
};