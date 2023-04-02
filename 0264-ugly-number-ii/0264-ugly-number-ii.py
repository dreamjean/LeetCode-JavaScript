class Solution:
    def nthUglyNumber(self, n: int) -> int:
        nums = [1]
        i2 = i3 = i5 = 0
        while len(nums) < n:
            t2, t3, t5 = nums[i2] * 2, nums[i3] * 3, nums[i5] * 5
            nums.append(min(t2, t3, t5))
            if nums[-1] == t2:
                i2 += 1
            if nums[-1] == t3:
                i3 += 1
            if nums[-1] == t5:
                i5 += 1
        return nums[-1]