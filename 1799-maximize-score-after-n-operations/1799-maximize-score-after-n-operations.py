class Solution:
    def maxScore(self, nums: List[int]) -> int:
        def gcd(a, b):
            if b == 0:
                return a
            return gcd(b, a % b)
      
        def dfs(i = 1, mask = 0):
            if i > n:
                return 0
            if memo[mask]:
                return memo[mask]

            ans = 0
            for j in range(m):
                if ((mask >> j) & 1): 
                    continue
                for k in range(j + 1, m):
                    if ((mask >> k) & 1):
                        continue
                    newMask = mask | (1 << j) | (1 << k)
                    source = i * gcd(nums[j], nums[k])
                    ans = max(ans, source, source + dfs(i + 1, newMask))
            memo[mask] = ans
            return ans
          
        
        m, n = len(nums), len(nums) / 2
        memo = [0] * (1 << m)
        
        return dfs()
      
        
        
          
            