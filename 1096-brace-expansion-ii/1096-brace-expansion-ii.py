class Solution:
    def braceExpansionII(self, expression: str) -> List[str]:
        def dfs(exp):
            j = exp.find('}')
            if j == -1:
                seen.add(exp)
                return
            i = exp.rfind('{', 0, j - 1)
            prefix, subfix = exp[:i], exp[j+1:]
            for ch in exp[i+1:j].split(','):
                dfs(prefix + ch + subfix)
                
                
        seen = set()
        dfs(expression)
        return sorted(seen)