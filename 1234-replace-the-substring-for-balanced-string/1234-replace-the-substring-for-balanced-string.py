class Solution:
    def balancedString(self, s: str) -> int:
        count, n, k = Counter(s), len(s), len(s) // 4
        l, ans = 0, n
        for i, ch in enumerate(s):
            count[ch] -= 1
            while l < n and count['Q'] <= k and count['W'] <= k and count['E'] <= k and count['R'] <= k:
                ans = min(ans, i - l + 1)
                count[s[l]] += 1
                l += 1
        return ans
                