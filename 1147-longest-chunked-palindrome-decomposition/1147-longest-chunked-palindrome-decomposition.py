class Solution:
    def longestDecomposition(self, text: str) -> int:
        ans = 0
        while text:
            i = 1
            while i <= len(text) // 2 and text[:i] != text[-i:]:
                i += 1
            if i > len(text) // 2:
                ans += 1
                break
            ans += 2
            text = text[i:-i]
        return ans