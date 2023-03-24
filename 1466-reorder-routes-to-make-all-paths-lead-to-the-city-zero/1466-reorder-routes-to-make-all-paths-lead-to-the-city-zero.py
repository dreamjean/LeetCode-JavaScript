class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
        def dfs(curr, prev):
            nonlocal count
            count += (prev, curr) in seen
            for nxt in graph[curr]:
                if nxt != prev:
                    dfs(nxt, curr)
                    
        
        graph = defaultdict(list)
        seen = set()
        count = 0
        for [u, v] in connections:
            seen.add((u, v))
            graph[u].append(v)
            graph[v].append(u)
            
        dfs(0, -1)
        return count