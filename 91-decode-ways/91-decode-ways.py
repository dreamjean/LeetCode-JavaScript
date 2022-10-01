class Solution:
    def numDecodings(self, s: str) -> int:
        n = len(s)
        last1 = last2 = 1
        if s[0] == '0': return 0
        if n == 1: return 1
        
        for i in range(1, n):
            if s[i] == '0': 
                last1 = 0
            if s[i - 1] == '1' or (s[i - 1] == '2' and s[i] <= '6'):
                last1 += last2
                last2 = last1 - last2
            else:
                last2 = last1
        return last1