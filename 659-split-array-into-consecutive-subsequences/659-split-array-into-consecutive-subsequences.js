/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {
  const freq = {};
  const end = new Map();

  nums.forEach((num) => (freq[num] ? freq[num]++ : (freq[num] = 1)));

  for (let num of nums) {
    if (!freq[num]) continue;

    freq[num]--;
    if (end.get(num - 1)) {
      end.set(num - 1, end.get(num - 1) - 1);
      end.set(num, (end.get(num) || 0) + 1);
    } 
    else if (freq[num + 1] && freq[num + 2]) {
      freq[num + 1]--;
      freq[num + 2]--;
      end.set(num + 2, (end.get(num + 2) || 0) + 1);
    } 
    else return false;
  }

  return true;
};
