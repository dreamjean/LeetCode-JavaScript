class Solution:
    def minTime(self, n: int, edges: List[List[int]], hasApple: List[bool]) -> int:
        def dfs(curr, prev):
            ans = sum(dfs(next, curr) for next in grid[curr] if next != prev)
            if ans or hasApple[curr]:
                ans += 2
            return ans
          
          
        grid = [[] for _ in range(n)]
        
        for u, v in edges:
            grid[u].append(v)
            grid[v].append(u)
        
        return max(dfs(0, -1) - 2, 0)
            