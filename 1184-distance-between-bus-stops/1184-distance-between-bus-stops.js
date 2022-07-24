/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let [res1, res2] = [0, 0];

  if (start > destination) [start, destination] = [destination, start];

  distance.forEach((val, i) =>
    i >= start && i < destination ? (res1 += val) : (res2 += val)
  );

  return Math.min(res1, res2);
};
