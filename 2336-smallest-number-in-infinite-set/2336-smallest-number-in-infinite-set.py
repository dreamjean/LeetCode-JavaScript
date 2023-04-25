class SmallestInfiniteSet:

    def __init__(self):
        self.nums = list(range(1001))
        self.start = 1

    def popSmallest(self) -> int:
        while self.nums[self.start] == 0:
            self.start += 1
        self.nums[self.start] = 0
        return self.start

    def addBack(self, num: int) -> None:
        self.nums[num] = num
        self.start = min(self.start, num)


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)