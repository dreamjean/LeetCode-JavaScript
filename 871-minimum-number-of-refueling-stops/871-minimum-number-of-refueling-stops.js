/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  const pq = new MaxPriorityQueue();
  const n = stations.length;
  let [currFuel, i, count] = [startFuel, 0, 0];

  while (currFuel < target) {
    while (i < n && currFuel >= stations[i][0]) 
      pq.enqueue(stations[i++][1]);

    if (pq.isEmpty()) return -1;

    currFuel += pq.dequeue().element;
    count++;
  }

  return count;
};
