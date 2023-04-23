class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], indexDiff: int, valueDiff: int) -> bool:
        bucket = {}
        for i, num in enumerate(nums):
            idx = num // (valueDiff + 1)
            if idx in bucket:
                return True
            if idx - 1 in bucket and abs(num - bucket[idx - 1]) <= valueDiff:
                return True
            if idx + 1 in bucket and abs(num - bucket[idx + 1]) <= valueDiff:
                return True
            bucket[idx] = num
            if i >= indexDiff:
                del bucket[nums[i - indexDiff] // (valueDiff + 1)]
        return False