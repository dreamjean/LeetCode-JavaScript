class Solution:
    def specialArray(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        def findSpecial(mid):
            return sum(num >= mid for num in nums)
        
        
        l, r = 0, max(nums)
        while l <= r:
            mid = (l + r) >> 1
            num = findSpecial(mid)
            if num == mid:
                return num
            if num > mid:
                l = mid + 1
            else:
                r = mid - 1
        return -1