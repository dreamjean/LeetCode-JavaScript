class Solution:
    def addRungs(self, rungs: List[int], dist: int) -> int:
        ans = prev = 0
        for num in rungs:
            if prev + dist < num:
                ans += (num - prev - 1) // dist
            prev = num
        return ans