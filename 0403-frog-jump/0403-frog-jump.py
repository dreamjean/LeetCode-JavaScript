class Solution:
    def canCross(self, stones: List[int]) -> bool:
        @cache
        def dp(i, diff):
            if i == len(stones) - 1:
                return True
            for j in range(i + 1, len(stones)):
                d = stones[j] - stones[i]
                if d > diff + 1:
                    break
                if d >= diff - 1 and d <= diff + 1 and dp(j, d):
                    return True
            return False
          
          
        return dp(0, 0)