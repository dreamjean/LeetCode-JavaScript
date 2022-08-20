class Solution:
    def wiggleMaxLength(self, nums: List[int]) -> int:
        up = down = 1
        for i in range(1, len(nums)):
            prev, curr = nums[i - 1], nums[i]
            if curr < prev: 
                up = down + 1
            elif curr > prev:
                down = up + 1
        return max(up, down)  