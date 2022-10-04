class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        def check(time, mid, totalTrips):
            return sum(mid // t for t in time) >= totalTrips
        
        
        low, high = 1, totalTrips * time[0]
        while low < high:
            mid = (low+high) >> 1
            if check(time, mid, totalTrips):
                high = mid
            else:
                low = mid + 1
        return low