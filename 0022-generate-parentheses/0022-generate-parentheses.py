class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans = []
        
        @cache
        def dfs(l, r, path = ''):
            if l == 0 and r == 0:
                ans.append(path)
                return
            if l > 0:
                dfs(l - 1, r, path + '(')
            if r > l:
                dfs(l, r - 1, path + ')')
                
          
        dfs(n, n)
        return ans