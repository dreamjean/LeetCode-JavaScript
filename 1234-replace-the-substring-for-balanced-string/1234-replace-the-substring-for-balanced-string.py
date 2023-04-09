class Solution:
    def balancedString(self, s: str) -> int:
        count, n = Counter(s), len(s)
        ans, k, j = n, n // 4, 0
        for i, ch in enumerate(s):
            count[ch] -= 1
            while j < n and count['E'] <= k and count['Q'] <= k and count['W'] <= k and count['R'] <= k:
                ans = min(ans, i - j + 1)
                count[s[j]] += 1
                j += 1
        return ans