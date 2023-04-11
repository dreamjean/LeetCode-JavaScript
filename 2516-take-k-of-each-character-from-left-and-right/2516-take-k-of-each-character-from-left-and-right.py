class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        count, n = Counter(s), len(s)
        j = window = 0
        if count['a'] < k or count['b'] < k or count['c'] < k:
            return -1
        for i, ch in enumerate(s):
            count[ch] -= 1
            while count[ch] < k:
                count[s[j]] += 1
                j += 1
            window = max(window, i - j + 1)
        return n - window