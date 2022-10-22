/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  nums1.sort((a, b) => b - a);
  const indexs = nums2.map((_, i) => i).sort((a, b) => nums2[b] - nums2[a]);
  const n = nums1.length;
  const ans = new Array(n).fill(0);
  let [l, r] = [0, n - 1];

  for (let i of indexs) {
    ans[i] = nums1[l] > nums2[i] ? nums1[l++] : nums1[r--];
  }

  return ans;
};
