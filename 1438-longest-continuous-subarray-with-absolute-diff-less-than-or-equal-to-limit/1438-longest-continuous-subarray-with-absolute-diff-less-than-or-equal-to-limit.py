class Solution:
    def longestSubarray(self, nums: List[int], limit: int) -> int:
        qmax, qmin, i = deque(), deque(), 0
        for num in nums:
            while qmax and qmax[-1] < num:
                qmax.pop()
            while qmin and qmin[-1] > num:
                qmin.pop()
            qmax.append(num)
            qmin.append(num)
            if qmax[0] - qmin[0] > limit:
                if qmax[0] == nums[i]:
                    qmax.popleft()
                if qmin[0] == nums[i]:
                    qmin.popleft()
                i += 1
        return len(nums) - i;