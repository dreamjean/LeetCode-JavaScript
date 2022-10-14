class Solution:
    def distinctSubseqII(self, s: str) -> int:
        end = [0] * 26
        MOD, ans = 10**9 + 7, 0
        for c in s:
            i = ord(c) - ord('a')
            ans, end[i] = ans * 2 + 1 - end[i], ans + 1
        return ans % MOD
      