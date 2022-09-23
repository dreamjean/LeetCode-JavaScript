class Solution:
    def concatenatedBinary(self, n: int) -> int:
        MOD, res = 10 ** 9 + 7, 1        
        for i in range(2, n + 1):
            res = (res << i.bit_length() | i) % MOD
        return res
