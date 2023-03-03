class TrieNode:
    def __init__(self):
        self.next = defaultdict(TrieNode)
        self.is_word = False
        

class StreamChecker:

    def __init__(self, words: List[str]):
        self.s = ''
        self.root = TrieNode()
        
        for word in words:
            node = self.root
            for ch in word[::-1]:
                node = node.next[ch]
            node.is_word = True
            

    def query(self, letter: str) -> bool:
        self.s = letter + self.s
        node = self.root
        for ch in self.s:
            if not ch in node.next:
                return False
              
            node = node.next[ch]
            if node and node.is_word:
                return True
        return False


# Your StreamChecker object will be instantiated and called as such:
# obj = StreamChecker(words)
# param_1 = obj.query(letter)