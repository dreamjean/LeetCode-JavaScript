/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
  const pq = new MinPriorityQueue({ priority: x => x[2] });
  const n2 = nums2.length;
  const ans = [];
  
  nums1.forEach((num, i) => pq.enqueue([i, 0, num + nums2[0]]));
  
  while (k-- && !pq.isEmpty()) {
    const [i, j, _] = pq.dequeue().element;
    ans.push([nums1[i], nums2[j]]);
    
    if (j + 1 < n2) pq.enqueue([i, j + 1, nums1[i] + nums2[j + 1]]);
  }
  
  return ans;
};