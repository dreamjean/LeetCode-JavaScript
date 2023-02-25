class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        seen = set(wordDict)
        ok = [True]
        
        for i in range(1, len(s) + 1):
            curr = False
            for j in range(0, i):
                if s[j:i] in seen and ok[j]:
                    curr = True
            ok.append(curr)
        return ok[-1]