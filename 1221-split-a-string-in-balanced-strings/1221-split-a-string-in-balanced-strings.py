class Solution:
    def balancedStringSplit(self, s: str) -> int:
        cnt, ans = 0, 0
        for c in s:
            cnt += 1 if c == 'R' else -1
            if not cnt:
                ans += 1
        return ans