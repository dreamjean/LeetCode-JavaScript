class FreqStack:

    def __init__(self):
      self.freq = Counter()
      self.m = defaultdict(list)
      self.max_freq = 0
        

    def push(self, val: int) -> None:
        freq, m = self.freq, self.m
        freq[val] += 1
        
        self.max_freq = max(self.max_freq, freq[val])
        m[freq[val]].append(val)

    def pop(self) -> int:
        freq, m, maxf = self.freq, self.m, self.max_freq
        x = m[maxf].pop()
        if not m[freq[x]]:
            self.max_freq -= 1
        
        freq[x] -= 1
        
        return x
        


# Your FreqStack object will be instantiated and called as such:
# obj = FreqStack()
# obj.push(val)
# param_2 = obj.pop()