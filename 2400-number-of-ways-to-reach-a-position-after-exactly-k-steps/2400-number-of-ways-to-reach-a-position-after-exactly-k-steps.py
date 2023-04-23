class Solution:
    def numberOfWays(self, startPos: int, endPos: int, k: int) -> int:
        MOD = 10**9 + 7
        distance = abs(startPos - endPos)
        if distance > k or distance % 2 != k % 2:
            return 0
        return comb(k, (distance + k) // 2) % MOD