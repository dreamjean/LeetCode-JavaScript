/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    const pq = new MaxPriorityQueue();
    let sum = 0;
    
    target.forEach(num => {
        sum += num;
        pq.enqueue(num);
    });
    
    while (pq.front().element !== 1) {
        let num = pq.dequeue().element;
        sum -= num;
        if (num <= sum || sum < 1) return false;
        
        num %= sum;
        sum += num;
        pq.enqueue(num || sum);
    }
    
    return true;
};