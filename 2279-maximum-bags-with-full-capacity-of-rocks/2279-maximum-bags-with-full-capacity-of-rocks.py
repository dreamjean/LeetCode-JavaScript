class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        nums = sorted(c - r for c, r in zip(capacity, rocks))
        ans = 0
        
        for num in nums:
            if additionalRocks >= num:
                additionalRocks -= num
                ans += 1
            else:
                break
        return ans