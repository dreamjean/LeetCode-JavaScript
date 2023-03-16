class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        count = Counter([0])
        ans, bal, found = 0, 0, False
        for num in nums:
            if num < k:
                bal -= 1
            elif num > k:
                bal += 1
            else:
                found = True
            if found:
                ans += count[bal] + count[bal - 1]
            else:
                count[bal] += 1
        return ans