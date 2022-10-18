/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const n = students.length;
  const counter = [0, 0];
  let i = 0;

  students.forEach((s) => counter[s]++);

  while (i < n && counter[sandwiches[i]] > 0) counter[sandwiches[i++]]--;

  return n - i;
};
