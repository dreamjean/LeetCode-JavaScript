class Solution:
    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:
        def dfs(curr, color):
            if colors[curr]:
                return colors[curr] == color
              
            colors[curr] = color
            for nxt in graph[curr]:
                  if not dfs(nxt, -color):
                      return False
            return True
          
          
        colors = [0] * n
        graph = defaultdict(list)
        
        for a, b in dislikes:
            graph[a - 1].append(b - 1)
            graph[b - 1].append(a - 1)
            
        return all(color or dfs(i, 1) for i, color in enumerate(colors))