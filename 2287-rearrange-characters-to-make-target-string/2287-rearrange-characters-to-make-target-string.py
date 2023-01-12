class Solution:
    def rearrangeCharacters(self, s: str, target: str) -> int:
        freqS = Counter(s)
        return min(freqS[i] // freq for i, freq in Counter(target).items())