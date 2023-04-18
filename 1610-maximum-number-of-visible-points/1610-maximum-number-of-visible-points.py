class Solution:
    def visiblePoints(self, points: List[List[int]], angle: int, location: List[int]) -> int:
        angle = angle * math.pi / 180
        x0, y0 = location
        angles = []
        j = extra = count = 0
        for x, y in points:
            if x == x0 and y == y0:
                extra += 1
            else:
                angles.append(math.atan2(y - y0, x - x0))
        angles.sort()
        angles += [x + math.pi * 2 for x in angles]
        for i, x in enumerate(angles):
            while x - angles[j] > angle:
                j += 1
            count = max(count, i - j + 1)
        return count + extra