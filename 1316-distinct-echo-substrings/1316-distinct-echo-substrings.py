class Solution:
    def distinctEchoSubstrings(self, text: str) -> int:
        seen = set()
        n, ans = len(text), 0
        for k in range(1, n // 2 + 1):
            l, r, count = 0, k, 0
            while l < n - k:
                if text[l] == text[r]:
                    count += 1
                else:
                    count = 0
                if count == k:
                    seen.add(text[l-k+1:l+1])
                    count -= 1
                l, r = l + 1, r + 1
              
        return len(seen)