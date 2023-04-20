class Solution:
    def longestWPI(self, hours: List[int]) -> int:
        seen = {}
        source = ans = 0
        for i, hour in enumerate(hours):
            source += 1 if hour > 8 else -1
            if source > 0:
                ans = i + 1
            if source not in seen:
                seen[source] = i
            if source - 1 in seen:
                ans = max(ans, i - seen[source - 1])
        return ans