class Solution:
    def shortestCommonSupersequence(self, str1: str, str2: str) -> str:
        def lcs(str1, str2):
            m, n = len(str1), len(str2)
            dp = [[''] * (n + 1) for _ in range(m + 1)]
            for i in range(m):
                for j in range(n):
                    if str1[i] == str2[j]:
                        dp[i+1][j+1] = dp[i][j] + str1[i]
                    else:
                        dp[i+1][j+1] = dp[i+1][j] if len(dp[i+1][j]) > len(dp[i][j+1]) else dp[i][j+1]
            return dp[-1][-1]
          
        
        LCS = lcs(str1, str2)
        i = j = 0
        ans = ''
        for char in LCS:
            while str1[i] != char:
                ans += str1[i]
                i += 1
            while str2[j] != char:
                ans += str2[j]
                j += 1
            ans += char
            i += 1
            j += 1
        return ans + str1[i:] + str2[j:]