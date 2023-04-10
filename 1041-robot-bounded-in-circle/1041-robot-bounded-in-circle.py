class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        dirs = ((0, 1), (1, 0), (0, -1), (-1, 0))
        x = y = d = 0
        for ch in instructions:
            if ch == 'R':
                d = (d + 1) % 4
            elif ch == 'L':
                d = (d + 3) % 4
            else:
                x += dirs[d][0]
                y += dirs[d][1]
        return (x, y) == (0, 0) or d > 0