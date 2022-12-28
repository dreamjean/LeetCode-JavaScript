class Solution:
    def minStoneSum(self, piles: List[int], k: int) -> int:
        mx = max(piles)
        cnt = [0] * (mx + 1)
        ans = 0
        
        for p in piles:
            cnt[p] += 1
            
        for i in range(mx, -1, -1):
            while cnt[i]:
                if k:
                    k -= 1
                    cnt[(i + 1) // 2] += 1
                else:
                    ans += i
                cnt[i] -= 1
        return ans
                    