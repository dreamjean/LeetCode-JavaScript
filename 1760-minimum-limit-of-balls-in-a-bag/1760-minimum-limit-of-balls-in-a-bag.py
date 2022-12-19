class Solution:
    def minimumSize(self, nums: List[int], maxOperations: int) -> int:
        low, high = 1, max(nums)
        while low < high:
            mid = (low + high) >> 1
            if sum((num - 1) // mid for num in nums) > maxOperations:
                low = mid + 1
            else:
                high = mid
        return low