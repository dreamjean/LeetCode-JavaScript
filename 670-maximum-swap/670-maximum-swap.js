/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const nums = num.toString().split("").map(x => +x);
  const n = nums.length;
  let [maxIdx, low, high] = [n - 1, 0, 0];

  for (let i = n - 1; i >= 0; i--) {
    const [curr, max] = [nums[i], nums[maxIdx]];
    if (curr > max) maxIdx = i;
    else if (curr < max) [low, high] = [i, maxIdx];
  }

  [nums[low], nums[high]] = [nums[high], nums[low]];

  return +nums.join("");
};
