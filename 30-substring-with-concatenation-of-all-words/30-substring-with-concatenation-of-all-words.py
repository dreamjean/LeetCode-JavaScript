class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        cnts, size, mp = len(words), len(words[0]), Counter(words)
        limit = cnts * size
        return [i for i in range(len(s)-limit+1) if Counter([s[j:j+size] for j in range(i, i+limit, size)]) == mp]