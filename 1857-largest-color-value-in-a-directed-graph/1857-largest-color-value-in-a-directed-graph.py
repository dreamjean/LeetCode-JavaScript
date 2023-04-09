class Solution:
    def largestPathValue(self, colors: str, edges: List[List[int]]) -> int:
        n = len(colors)
        graph = [[] for _ in range(n)]
        indegree = Counter()
        count = defaultdict(Counter)
        
        for u, v in edges:
            graph[u].append(v)
            indegree[v] += 1
            
        queue = [i for i in range(n) if indegree[i] == 0]
        
        for u in queue:
            count[u][ord(colors[u]) - ord('a')] += 1
            for v in graph[u]:
                count[v] |= count[u]
                indegree[v] -= 1
                if indegree[v] == 0:
                    queue.append(v)
        return -1 if len(queue) < n else max(max(count[u].values()) for u in count)