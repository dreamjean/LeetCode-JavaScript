class Solution:
    def maxPerformance(self, n: int, speed: List[int], efficiency: List[int], k: int) -> int:
        pq = []
        sSum = res = 0
        for e, s in sorted(zip(efficiency, speed), reverse=True):
            heapq.heappush(pq, s)
            sSum += s
            if len(pq) > k:
                sSum -= heapq.heappop(pq)
            res = max(res, sSum * e)
        return res % (10**9 + 7)