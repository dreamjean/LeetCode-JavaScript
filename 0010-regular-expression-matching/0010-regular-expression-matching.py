class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        m, n = len(s), len(p)
        dp = [True] + [False] * n
        
        for j in range(2, n + 1):
            if p[j - 1] == '*':
                dp[j] = dp[j - 2]
        
        for i in range(1, m + 1):
            tmp = [False] * (n + 1)
            for j in range(1, n + 1):
                if s[i - 1] == p[j - 1] or p[j - 1] == '.':
                    tmp[j] = dp[j - 1]
                elif p[j - 1] == '*':
                    if s[i - 1] != p[j - 2] and p[j - 2] != '.':
                        tmp[j] = tmp[j - 2]
                    else:
                        tmp[j] = tmp[j - 2] | dp[j]
            dp = tmp
        
        return dp[-1]