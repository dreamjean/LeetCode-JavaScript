class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        seen = set('aeiou')
        ans, cnt = 0, 0
        for i, ch in enumerate(s):
            if ch in seen:
                cnt += 1
            if i >= k and s[i - k] in seen:
                cnt -= 1
            ans = max(ans, cnt)
        return ans