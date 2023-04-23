class Solution:
    def numberOfArrays(self, s: str, k: int) -> int:
        @cache
        def dfs(i):
            if i == len(s):
                return 1
            if s[i] == '0':
                return 0
            ans, num = 0, ''
            for j in range(i, len(s)):
                num += s[j]
                if int(num) > k:
                    break
                ans += dfs(j + 1)
            return ans % (10**9 + 7)
          
        return dfs(0)