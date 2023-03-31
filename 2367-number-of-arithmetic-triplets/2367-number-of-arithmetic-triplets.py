class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        seen = set(nums)
        return sum(num + diff in seen and num + diff*2 in seen for num in nums)