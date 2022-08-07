/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const times = new Array(n).fill(0);
  const stack = [];

  for (let log of logs) {
    const [id, point, time] = log.split(":");
    if (point === "start") stack.push([id, time]);
    else {
      const [startId, startTime] = stack.pop();
      const diff = time - startTime + 1;
      times[startId] += diff;
      if (stack.length) times[stack.at(-1)[0]] -= diff;
    }
  }

  return times;
};
