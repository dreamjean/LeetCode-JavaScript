/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minOperations = function(nums1, nums2) {
  const [n1, n2] = [nums1.length, nums2.length];
  
  if (n1 * 6 < n2 || n2 * 6 < n1) return -1;
  
  let [sum1, sum2] = [getSum(nums1), getSum(nums2)];
  if (sum1 > sum2) return minOperations(nums2, nums1);
  
  const cnt = new Array(6).fill(0);
  let [i, ans] = [5, 0];
  
  nums1.forEach((num) => cnt[6 - num]++);
  nums2.forEach((num) => cnt[num - 1]++);
  
  while (sum1 < sum2) {
    while (!cnt[i]) i--;
    
    sum1 += i;
    cnt[i]--;
    ans++;
  }
  
  return ans;
};

const getSum = (nums) => nums.reduce((a, b) => a + b);