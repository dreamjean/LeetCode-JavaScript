class Solution:
    def appealSum(self, s: str) -> int:
        n, ans = len(s), 0
        last = defaultdict(lambda: -1)
        for i, char in enumerate(s):
            ans += (n - i) * (i - last[char])
            last[char] = i
        return ans