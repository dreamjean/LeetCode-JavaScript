class FrontMiddleBackQueue:

    def __init__(self):
        self.first, self.second = deque(), deque()
        
    def pushFront(self, val: int) -> None:
        self.first.appendleft(val)
        self.balance()
        
    def pushMiddle(self, val: int) -> None:
        if len(self.first) > len(self.second):
            self.second.appendleft(self.first.pop())
        self.first.append(val)

    def pushBack(self, val: int) -> None:
        self.second.append(val)
        self.balance()

    def popFront(self) -> int:
        val = self.first.popleft() if self.first else -1
        self.balance()
        return val

    def popMiddle(self) -> int:
        val = (self.first or [-1]).pop()
        self.balance()
        return val

    def popBack(self) -> int:
        val = (self.second or self.first or [-1]).pop()
        self.balance()
        return val
        
    def balance(self):
        if len(self.first) > len(self.second) + 1:
            self.second.appendleft(self.first.pop())
        if len(self.first) < len(self.second):
            self.first.append(self.second.popleft())


# Your FrontMiddleBackQueue object will be instantiated and called as such:
# obj = FrontMiddleBackQueue()
# obj.pushFront(val)
# obj.pushMiddle(val)
# obj.pushBack(val)
# param_4 = obj.popFront()
# param_5 = obj.popMiddle()
# param_6 = obj.popBack()