class Solution:
    def minFlipsMonoIncr(self, s: str) -> int:
        ans = ones = 0
        for ch in s:
            if ch == '0':
                ans = min(ans + 1, ones)
            else:
                ones += 1
        return ans