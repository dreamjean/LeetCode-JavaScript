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
      times[startId] += time - startTime + 1;
      if (stack.length) times[stack.at(-1)[0]] -= time - startTime + 1;
    }
  }

  return times;
};
