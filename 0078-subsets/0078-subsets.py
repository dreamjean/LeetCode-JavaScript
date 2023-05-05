class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        n = len(nums)
        ans = []
        for mask in range(1 << n):
            sub = []
            for i in range(n):
                if mask >> i & 1:
                    sub.append(nums[i])
            ans.append(sub)
        return ans