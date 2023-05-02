class Graph:

    def __init__(self, n: int, edges: List[List[int]]):
        self.graph = [[] for _ in range(n)]
        for u, v, cost in edges:
            self.graph[u].append([v, cost])

    def addEdge(self, edge: List[int]) -> None:
        u, v, cost = edge
        self.graph[u].append([v, cost])

    def shortestPath(self, node1: int, node2: int) -> int:
        dist = [inf] * len(self.graph)
        dist[node1] = 0
        heap = [(0, node1)]
        while heap:
            (min_dist, u) = heappop(heap)
            if u == node2:
                return min_dist
            for v, cost in self.graph[u]:
                next_dist = cost + min_dist
                if next_dist < dist[v]:
                    dist[v] = next_dist
                    heappush(heap, (next_dist, v))
        return -1


# Your Graph object will be instantiated and called as such:
# obj = Graph(n, edges)
# obj.addEdge(edge)
# param_2 = obj.shortestPath(node1,node2)