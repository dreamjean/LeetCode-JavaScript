class Solution:
    def longestBeautifulSubstring(self, word: str) -> int:
        ans, j, count = 0, 0, 1
        for i in range(1, len(word)):
            if word[i] < word[i - 1]:
                count = 1
                j = i
            elif word[i] > word[i - 1]:
                count += 1
            if count == 5:
                ans = max(ans, i - j + 1)
        return ans