/**
 * @param {number[]} time
 * @param {number} totalTrips
 * @return {number}
 */
var minimumTime = function(time, totalTrips) {
  let [low, high] = [1, totalTrips * time[0]];
  
  while (low < high) {
    const mid = low + Math.floor((high - low) / 2);
    if (biggerThanTotal(time, mid, totalTrips)) high = mid;
    else low = mid + 1;
  }
  
  return low;
};

const biggerThanTotal = (time, mid, totalTrips) => {
  let trips = 0;
  
  for (let t of time) trips += Math.floor(mid / t);
  
  return trips >= totalTrips;
}