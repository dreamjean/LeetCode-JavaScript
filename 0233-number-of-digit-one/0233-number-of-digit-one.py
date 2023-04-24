class Solution:
    def countDigitOne(self, n: int) -> int:
        s = str(n)
        @cache
        def dp(i, ones, tight):
            if i == len(s):
                return ones
            ans = 0          
            up = int(s[i]) if tight == 1 else 9
            for d in range(up + 1):
                ans += dp(i + 1, ones + (d == 1), tight & (d == up))
            return ans
        
        return dp(0, 0, 1)
            
              