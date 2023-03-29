class Solution:
    def maxSatisfaction(self, satisfaction: List[int]) -> int:
        nums = sorted(satisfaction, reverse=True)
        total = ans = 0
        for num in nums:
            if total + num < 0:
                break
            total += num
            ans += total
        return ans
            