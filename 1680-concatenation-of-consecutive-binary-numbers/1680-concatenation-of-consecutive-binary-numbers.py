class Solution:
    def concatenatedBinary(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        res, m = 1, 0b100
        for i in range(2, n + 1):
            if i == m:
                m <<= 1
            res = (res*m + i) % MOD
        return res