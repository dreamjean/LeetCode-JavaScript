class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        lo, hi = 1, time[0] * totalTrips
        while lo < hi:
            mid = (lo + hi) >> 1
            if sum(mid // t for t in time) >= totalTrips:
                hi = mid
            else:
                lo = mid + 1
        return lo