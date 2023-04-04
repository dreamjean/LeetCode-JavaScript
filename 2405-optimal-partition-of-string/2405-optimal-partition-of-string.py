class Solution:
    def partitionString(self, s: str) -> int:
        seen, ans = set(), 1
        for ch in s:
            if ch in seen:
                seen = set(ch)
                ans += 1
            seen.add(ch)
        return ans