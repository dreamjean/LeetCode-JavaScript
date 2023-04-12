class Solution:
    def minOperations(self, nums: List[int]) -> int:
        a = sorted(set(nums))
        n, m, left = len(nums), len(a), 0
        for i in range(m):
            if a[i] - a[left] >= n: 
                left += 1
        return n - (m - left)
