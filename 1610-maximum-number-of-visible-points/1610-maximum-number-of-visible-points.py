class Solution:
    def visiblePoints(self, points: List[List[int]], angle: int, location: List[int]) -> int:
        angle = angle * math.pi / 180
        x0, y0 = location
        arr = []
        j, extra, ans = 0, 0, 0
        
        for x, y in points:
            if x == x0 and y == y0:
                extra += 1
                continue
            arr.append(math.atan2(y - y0, x - x0))
        
        arr.sort()
        arr += [x + math.pi * 2 for x in arr]
        
        for i, x in enumerate(arr):
            while x - arr[j] > angle:
                j += 1
            ans = max(ans, i - j + 1)
        return ans + extra