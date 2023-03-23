class TrieNode:
    def __init__(self):
        self.next = {}
        self.is_word = False
        

class StreamChecker:

    def __init__(self, words: List[str]):
        self.s = ''
        self.root = TrieNode()
        
        for word in words:
            self.insert(word[::-1])
            

    def query(self, letter: str) -> bool:
        self.s = letter + self.s
        node = self.root
        for ch in self.s:
            if ch not in node.next:
                return False
            node = node.next[ch]
            if node and node.is_word:
                return True
        return False
        
        
    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.next.setdefault(ch, TrieNode())
        node.is_word = True


# Your StreamChecker object will be instantiated and called as such:
# obj = StreamChecker(words)
# param_1 = obj.query(letter)