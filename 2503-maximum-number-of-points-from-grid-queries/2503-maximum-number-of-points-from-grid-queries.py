class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
        m, n = len(grid), len(grid[0])
        ans = [0] * len(queries)
        heap = [(grid[0][0], 0, 0)]
        grid[0][0] = 0
        count = 0
        
        for i, q in sorted(enumerate(queries), key=lambda x: x[1]):
            while heap and heap[0][0] < q:
                _, r, c = heappop(heap)
                count += 1
                for x, y in (r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1):
                    if 0 <= x < m and 0 <= y < n and grid[x][y]:
                        heappush(heap, (grid[x][y], x, y))
                        grid[x][y] = 0
            ans[i] = count
            
        return ans