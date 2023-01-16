class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        distances = [float('inf')] * n
        cost, next_pos = 0, 0
        distances[0] = 1
        
        for _ in range(1, n):
            min_dist, pos = float('inf'), -1
            for i in range(1, n):
                x1, y1 = points[i]
                x2, y2 = points[next_pos]
                if distances[i]:
                    distances[i] = min(distances[i], abs(x1 - x2) + abs(y1 - y2))
                    if distances[i] < min_dist:
                        min_dist, pos = distances[i], i
            
            cost += min_dist
            distances[pos] = 0
            next_pos = pos
        
        return cost