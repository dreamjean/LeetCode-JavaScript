class SummaryRanges:

    def __init__(self):
        self.nums = []

    def addNum(self, value: int) -> None:
        if value in self.nums:
            return
        self.nums.append(value)
        self.nums.sort()

    def getIntervals(self) -> List[List[int]]:
        area = []
        n = len(self.nums)
        if n == 0:
            return area
        for i, num in enumerate(self.nums):
            if not area:
                area.append([num, num])
            else:
                lastArea = area[-1]
                if lastArea[1] + 1 == num:
                    lastArea[1] += 1
                else:
                    area.append([num, num])
        return area
            


# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges()
# obj.addNum(value)
# param_2 = obj.getIntervals()