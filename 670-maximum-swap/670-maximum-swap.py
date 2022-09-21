class Solution:
    def maximumSwap(self, num: int) -> int:
        nums = list(str(num))
        n = len(nums)
        l, r, maxIdx = 0, 0, n - 1
        for i in range(n - 2, -1, -1):
            if int(nums[i]) > int(nums[maxIdx]):
                maxIdx = i
            elif int(nums[i]) < int(nums[maxIdx]):
                l, r = i, maxIdx
        nums[l], nums[r] = nums[r], nums[l]
        return int(''.join(nums))