class Solution:
    def baseNeg2(self, n: int) -> str:
        ans = ''
        while n:
            ans = str(n & 1) + ans
            n = -(n >> 1)
        return ans if ans else '0'