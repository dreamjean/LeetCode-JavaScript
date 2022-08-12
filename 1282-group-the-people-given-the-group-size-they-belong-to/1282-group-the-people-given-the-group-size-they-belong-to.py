class Solution:
    def groupThePeople(self, groupSizes: List[int]) -> List[List[int]]:
        mp, ans = defaultdict(list), []
        for i, num in enumerate(groupSizes):
            mp[num].append(i)
            if len(mp[num]) == num:
                ans.append(mp[num])
                del mp[num]
        return ans