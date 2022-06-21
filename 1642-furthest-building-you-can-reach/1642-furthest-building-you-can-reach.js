/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    const n = heights.length;
    const pq = new MinPriorityQueue();
    
    for (let i = 0; i < n - 1; i++) {
        const diff = heights[i + 1] - heights[i];
        if (diff > 0) pq.enqueue(diff);
        
        if (pq.size() > ladders) bricks -= pq.dequeue().element;
        if (bricks < 0) return i;
    }
    
    return n - 1;
};