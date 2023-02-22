class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def isPossable(weights, mid, days):
            s, count = 0, 1
            for w in weights:
                if s + w > mid:
                    count += 1
                    s = 0
                s += w
                if count > days:
                    return False
            return True
          
          
        start, end = max(weights), sum(weights)
        while start < end:
            mid = (start + end) >> 1
            if isPossable(weights, mid, days):
                end = mid
            else:
                start = mid + 1
        return start
                
                        