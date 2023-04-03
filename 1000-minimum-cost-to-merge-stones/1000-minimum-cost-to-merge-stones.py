class Solution:
    def mergeStones(self, stones: List[int], k: int) -> int:
        n = len(stones)
        if (n - 1) % (k - 1):
            return -1
        prefix = list(accumulate(stones, initial=0))
        @cache
        def dp(i:int, j:int):
            if i == j:
                return 0
            res = min(dp(i, mid) + dp(mid + 1, j) for mid in range(i, j, k - 1))
            if (j - i) % (k - 1) == 0:
                res += prefix[j + 1] - prefix[i]
            return res
        
        return dp(0, n - 1)