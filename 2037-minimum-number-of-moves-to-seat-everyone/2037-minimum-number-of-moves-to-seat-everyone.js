/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  
  return seats.reduce((acc, curr, i) => acc + Math.abs(curr - students[i]), 0);
};