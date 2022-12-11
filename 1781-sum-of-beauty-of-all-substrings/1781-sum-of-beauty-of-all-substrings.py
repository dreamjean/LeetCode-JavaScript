class Solution:
    def beautySum(self, s: str) -> int:
        n, ans = len(s), 0
        
        for i in range(n):
            counter = Counter()
            for j in range(i, n):
                counter[s[j]] += 1
                ans += max(counter.values()) - min(counter.values())
        return ans