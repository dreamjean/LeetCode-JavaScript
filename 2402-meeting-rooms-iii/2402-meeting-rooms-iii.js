/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  const rooms = new MinPriorityQueue();
  const using = new PriorityQueue({ compare: (a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0] });
  const count = new Array(n).fill(0);
  let ans = 0;
  
  for (let i = 0; i < n; i++) rooms.enqueue(i);
  
  for (let [start, end] of meetings) {
    while (!using.isEmpty() && using.front()[0] <= start) 
      rooms.enqueue(using.dequeue()[1]);
    
    if (!rooms.isEmpty()) {
      let room = rooms.dequeue().element;
      using.enqueue([end, room]);
      count[room]++;
    } else {
      let [time, room] = using.dequeue();
      using.enqueue([time + end - start, room]);
      count[room]++;
    }
  } 
  
  for (let i = 1; i < n; i++)
    if (count[i] > count[ans]) ans = i;
  
  return ans;
};