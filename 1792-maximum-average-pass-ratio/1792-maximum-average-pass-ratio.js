/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
  const pq = new MaxPriorityQueue({ priority: x => x[0] });
  let sum = 0;
  
  for (let [pass, total] of classes) {
    sum += pass / total;
    pq.enqueue([profit(pass, total), pass, total]);
  }
  
  while (extraStudents--) {
    let [currProfit, pass, total] = pq.dequeue().element;
    sum += currProfit;
    pass++;
    total++;
    pq.enqueue([profit(pass, total), pass, total]);
  }
  
  return sum / classes.length;
};

const profit = (pass, total) => (pass + 1) / (total + 1) - pass / total;