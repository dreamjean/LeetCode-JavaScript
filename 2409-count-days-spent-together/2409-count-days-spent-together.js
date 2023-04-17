/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
  const arrive = Math.max(dayOfYear(arriveAlice), dayOfYear(arriveBob));
  const leave = Math.min(dayOfYear(leaveAlice), dayOfYear(leaveBob));
  
  return Math.max(0, leave - arrive + 1);
};

const dayOfYear = (dates) => {
  const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const preSum = days.reduce((acc, curr) => (acc.push(acc.at(-1) + curr), acc), [0]);
  const [m, d] = dates.split('-');
  
  return preSum[+m - 1] + +d;
}