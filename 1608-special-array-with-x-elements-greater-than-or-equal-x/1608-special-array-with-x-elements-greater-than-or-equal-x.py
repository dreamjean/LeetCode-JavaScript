class Solution:
    def specialArray(self, nums: List[int]) -> int:            
        nums.sort()
        l, r = 0, len(nums)
        while l <= r:
            mid = (l + r) >> 1
            cnt = sum(x >= mid for x in nums)
            if cnt == mid:
                return mid
            if cnt < mid:
                r = mid - 1
            else:
                l = mid + 1
        return -1
            