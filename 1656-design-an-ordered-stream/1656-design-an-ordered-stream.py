class OrderedStream:

    def __init__(self, n: int):
        self.stream = [None] * (n + 2)
        self.prev = 1

    def insert(self, idKey: int, value: str) -> List[str]:
        self.stream[idKey] = value
        if idKey == self.prev:
            while self.stream[self.prev]:
                self.prev += 1
        return self.stream[idKey:self.prev]


# Your OrderedStream object will be instantiated and called as such:
# obj = OrderedStream(n)
# param_1 = obj.insert(idKey,value)