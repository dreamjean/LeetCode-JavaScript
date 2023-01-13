class Solution:
    def countPrimes(self, n: int) -> int:
        prem = [0] * n
        ans = 0
        for i in range(2, n):
            if prem[i] == 1: continue
            
            ans += 1
            for j in range(i*i, n, i):
                prem[j] = 1
        return ans