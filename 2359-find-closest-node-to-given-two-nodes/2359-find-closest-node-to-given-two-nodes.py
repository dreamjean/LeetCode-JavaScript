class Solution:
    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:
        n, min_dis, ans = len(edges), len(edges), -1
        def calc_dis(x: int) -> List[int]:
            dis = [n] * n
            d = 0
            while x >= 0 and dis[x] == n:
                dis[x] = d
                d += 1
                x = edges[x]
            return dis
        for i, d in enumerate(map(max, zip(calc_dis(node1), calc_dis(node2)))):
            if d < min_dis:
                min_dis, ans = d, i
        return ans
        