class Solution:
    def longestObstacleCourseAtEachPosition(self, obstacles: List[int]) -> List[int]:
        sub = []
        ans = []
        for num in obstacles:
            if not sub or sub[-1] <= num:
                sub.append(num)
                ans.append(len(sub))
            else:
                idx = bisect_right(sub, num)
                sub[idx] = num
                ans.append(idx + 1)
        return ans