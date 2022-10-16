class Solution:
    def minDifficulty(self, jobDifficulty: List[int], d: int) -> int:
        @lru_cache(None)
        def dfs(i, d):
            if d == 1:
                return max(jobDifficulty[i:])
            res, mx = float('inf'), 0
            for j in range(i, n - d + 1):
                mx = max(mx, jobDifficulty[j])
                res = min(res, mx + dfs(j + 1, d - 1))
            return res
          
        n = len(jobDifficulty)
        return -1 if n < d else dfs(0, d)
            