/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let [end, steps, maxStep] = [0, 0, 0];

  for (let i = 0; i < nums.length - 1; i++) {
    maxStep = Math.max(maxStep, nums[i] + i);
    if (end === i) {
      end = maxStep;
      steps++;
    }
  }

  return steps;
};
