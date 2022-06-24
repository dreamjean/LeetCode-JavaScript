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
    })
    
    while (sum > 1 && pq.front().element > sum / 2) {
        let num = pq.dequeue().element;
        sum -= num;
        if (sum <= 1) return sum;
        
        pq.enqueue(num % sum);
        sum += num % sum
    }

    return sum === target.length;
};