class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_end = False
        

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.is_end = True

    def search(self, word: str) -> bool:
        def dfs(index, node):
            if index == len(word):
                return node.is_end
            ch = word[index]
            if ch == '.':
                for child in node.children:
                    if dfs(index + 1, node.children[child]):
                        return True
            if ch in node.children:
                return dfs(index + 1, node.children[ch])
            return False
          
          
        return dfs(0, self.root)
            


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)