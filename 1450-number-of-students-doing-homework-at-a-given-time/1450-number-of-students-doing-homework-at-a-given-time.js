/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  return startTime.reduce(
    (acc, curr, i) => acc + +(curr <= queryTime && endTime[i] >= queryTime),
    0
  );
};
