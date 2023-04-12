class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        count = Counter()
        j = max_cnt = 0
        for i, ch in enumerate(s):
            count[ch] += 1
            max_cnt = max(max_cnt, count[ch])
            while i - j + 1 - max_cnt > k:
                count[s[j]] -= 1
                j += 1
        return len(s) - j