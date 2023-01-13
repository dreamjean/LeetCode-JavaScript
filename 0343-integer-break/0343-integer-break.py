class Solution:
    def integerBreak(self, n: int) -> int:
        if n < 4:
            return n - 1
          
        avg, remain = n // 3, n % 3
        if remain == 0:
            return 3 ** avg
        if remain == 1:
            return 3 ** (avg-1) * 4
        return 3 ** avg * 2