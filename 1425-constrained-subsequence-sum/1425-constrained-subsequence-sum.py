class Solution:
    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:
        dq = deque()
        for i in range(len(nums)):
            nums[i] += dq[0] if dq else 0
            while dq and dq[-1] < nums[i]:
                dq.pop()
            if nums[i] > 0:
                dq.append(nums[i])
            if i >= k and dq and nums[i - k] == dq[0]:
                dq.popleft()
        return max(nums)