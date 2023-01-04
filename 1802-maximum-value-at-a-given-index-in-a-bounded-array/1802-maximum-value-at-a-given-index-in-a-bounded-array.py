class Solution:
    def maxValue(self, n: int, index: int, maxSum: int) -> int:
        def check(n, index, a, target):
            b = max(a - index, 0)
            ans = (a + b) * (a - b + 1) // 2
            b = max(a - (n - 1 - index), 0)
            ans += (a + b) * (a - b + 1) // 2
            return ans - a <= target
          
          
        maxSum -= n
        left, right = 1, maxSum
        while left <= right:
            mid = (left + right) >> 1
            if check(n, index, mid, maxSum):
                left = mid + 1
            else:
                right = mid - 1
        return left