class TrieNode:
    def __init__(self):
        self.children = {}
        self.is_word = False
        

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for ch in word:
            node = node.children.setdefault(ch, TrieNode())
        node.is_word = True

    def search(self, word: str) -> bool:
        return self.dfs(0, word, self.root)
      
    def dfs(self, index, word, node):
        if index == len(word):
            return node.is_word
        ch = word[index]
        if ch == '.':
            for child in node.children:
                if self.dfs(index + 1, word, node.children[child]):
                    return True
        if ch in node.children:
            return self.dfs(index + 1, word, node.children[ch])
        return False


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)