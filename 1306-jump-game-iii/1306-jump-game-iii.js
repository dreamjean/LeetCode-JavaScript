/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  const n = arr.length;
  const queue = [start];

  while (queue.length) {
    const i = queue.shift();
    if (arr[i] < 0) continue;
    if (!arr[i]) return true;

    arr[i] *= -1;
    const [left, right] = [i - arr[i], i + arr[i]];
    if (left >= 0 && arr[left] >= 0) queue.push(left);
    if (right < n && arr[right] >= 0) queue.push(right);
  }

  return false;
};
