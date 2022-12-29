class Solution:
    def getOrder(self, tasks: List[List[int]]) -> List[int]:
        tasks = sorted((task, i) for i, task in enumerate(tasks))
        heap, ans = [], []
        prev = 0
        
        for (e, p), i in tasks:
            while heap and prev < e:
                curP, curI, curE = heappop(heap)
                prev = max(prev, curE) + curP
                ans.append(curI)
            heappush(heap, (p, i, e))
        return ans + [i for _, i, _ in sorted(heap)]