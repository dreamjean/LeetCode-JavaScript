class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        count = Counter(num.bit_count() for num in set(nums))
        ans = 0
        for k1, cnt1 in count.items():
            for k2, cnt2 in count.items():
                if k1 + k2 >= k:
                    ans += cnt1 * cnt2
        return ans