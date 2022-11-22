class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]]
        m, n = len(maze), len(maze[0])
        dq = deque([entrance + [0]])
        while dq:
            r, c, cost = dq.popleft()
            if (r != entrance[0] or c != entrance[1]) and (not r or r == m - 1 or not c or c == n - 1):
                return cost
            for dx, dy in dirs:
                x, y = dx + r, dy + c
                if x < 0 or x >= m or y < 0 or y >= n or maze[x][y] != '.':
                    continue
                maze[x][y] = '+'
                dq.append([x, y, cost + 1])
        return -1
        
