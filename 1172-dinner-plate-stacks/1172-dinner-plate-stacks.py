class DinnerPlates:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.stacks = []
        self.h = []

    def push(self, val: int) -> None:
        if self.h and self.h[0] >= len(self.stacks):
            self.h = []
        if self.h:
            self.stacks[self.h[0]].append(val)
            if len(self.stacks[self.h[0]]) == self.capacity:
                heappop(self.h)
        else:
            self.stacks.append([val])
            if self.capacity > 1:
                heappush(self.h, len(self.stacks) - 1)

    def pop(self) -> int:
        return self.popAtStack(len(self.stacks) - 1)

    def popAtStack(self, index: int) -> int:
        if index < 0 or index >= len(self.stacks) or not self.stacks[index]:
            return -1
        if len(self.stacks[index]) == self.capacity:
            heappush(self.h, index)
        val = self.stacks[index].pop()
        while self.stacks and not self.stacks[-1]:
            self.stacks.pop()
        return val
        


# Your DinnerPlates object will be instantiated and called as such:
# obj = DinnerPlates(capacity)
# obj.push(val)
# param_2 = obj.pop()
# param_3 = obj.popAtStack(index)