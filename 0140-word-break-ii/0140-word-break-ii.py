class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> List[str]:
        def dfs(start, path):
            if start == len(s):
                ans.append(' '.join(path))
                return
            for i in range(start, len(s)):
                sub = s[start:i+1]
                if sub in seen:
                    dfs(i + 1, path + [sub])
          
          
        seen = set(wordDict)
        ans = []
        dfs(0, [])
        return ans