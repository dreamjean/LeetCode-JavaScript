/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function (time, totalTrips) {
  let [low, high] = [1, 1e14];

  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (graterThanTotal(time, mid, totalTrips)) high = mid;
    else low = mid + 1;
  }

  return low;
};

const graterThanTotal = (time, mid, totalTrips) =>
  time.reduce((acc, curr) => acc + Math.floor(mid / curr), 0) >= totalTrips;
