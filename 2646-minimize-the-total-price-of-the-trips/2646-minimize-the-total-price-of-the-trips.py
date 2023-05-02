class Solution:
    def minimumTotalPrice(self, n: int, edges: List[List[int]], price: List[int], trips: List[List[int]]) -> int:
        graph = [[] for _ in range(n)]
        count = [0] * n
        for u, v in edges:
            graph[u].append(v)
            graph[v].append(u)
            
        for start, end in trips:
            def dfs(u, father): 
                if u == end:
                    count[u] += 1
                    return True
                for v in graph[u]:
                    if v != father and dfs(v, u):
                        count[u] += 1
                        return True
                return False
            
            dfs(start, -1)
            
        
        def dfs(u, father):
            full = count[u] * price[u]
            half = full // 2
            for v in graph[u]:
                if v != father:
                    ff, hh = dfs(v, u)
                    full += min(ff, hh)
                    half += ff
            return full, half
          
        return min(dfs(0, -1))