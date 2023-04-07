class Solution:
    def maximumScore(self, nums: List[int], k: int) -> int:
        n, min_num, ans = len(nums), nums[k], nums[k]
        l = r = k
        while l > 0 or r < n - 1:
            if l == 0:
                r += 1
            elif r == n - 1:
                l -= 1
            else:
                if nums[l - 1] < nums[r + 1]:
                    r += 1
                else:
                    l -= 1
            min_num = min(min_num, nums[l], nums[r])
            ans = max(ans, min_num * (r - l + 1))
        return ans