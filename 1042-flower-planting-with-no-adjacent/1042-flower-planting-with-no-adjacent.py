class Solution:
    def gardenNoAdj(self, n: int, paths: List[List[int]]) -> List[int]:
        graph = [[] for _ in range(n)]
        ans = [0] * n
        for a, b in paths:
            graph[a - 1].append(b - 1)
            graph[b - 1].append(a - 1)
        for i, nodes in enumerate(graph):
            ans[i] = (set(range(1, 5)) - {ans[j] for j in nodes}).pop()
        return ans