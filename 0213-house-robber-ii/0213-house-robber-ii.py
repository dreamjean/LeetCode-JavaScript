class Solution:
    def rob(self, nums: List[int]) -> int:
        def dfs(start, end):
            a = b = 0
            for i in range(start, end):
                a, b = b, max(b, nums[i] + a)
            return max(a, b)
          
          
        n = len(nums)
        return nums[0] if n == 1 else max(dfs(0, n - 1), dfs(1, n))