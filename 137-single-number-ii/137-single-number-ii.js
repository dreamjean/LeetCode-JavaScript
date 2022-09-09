/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let [cnt1, cnt2, ans] = [0, 0, 0];

  for (let num of nums) {
    let [a, b] = [0, 0];
    for (let i = 0; i < 32; i++) {
      const hi = (cnt1 >> i) & 1;
      const low = (cnt2 >> i) & 1;
      const sum = (hi * 2 + low + ((num >> i) & 1)) % 3;
      a |= (sum / 2) << i;
      b |= sum % 2 << i;
    }

    [cnt1, cnt2] = [a, b];
  }

  for (let i = 0; i < 32; i++) {
    ans += ((cnt2 >> i) & 1) << i;
  }

  return ans;
};
