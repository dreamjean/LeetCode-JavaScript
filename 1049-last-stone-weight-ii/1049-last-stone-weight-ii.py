class Solution:
    def lastStoneWeightII(self, stones: List[int]) -> int:
        dp = {0}
        sumS = sum(stones)
        for stone in stones:
            dp |= {stone + x for x in dp}
        return min(abs(sumS - x - x) for x in dp)