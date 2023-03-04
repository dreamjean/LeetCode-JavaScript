class Solution:
    def countTriplets(self, nums: List[int]) -> int:
        count = Counter(x&y for x in nums for y in nums)
        return sum(v for xy, v in count.items() for num in nums if num & xy == 0)