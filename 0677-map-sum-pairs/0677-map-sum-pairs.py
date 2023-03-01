class TrieNode:
    def __init__(self):
        self.children = {}
        self.val = 0
        

class MapSum:

    def __init__(self):
        self.root = TrieNode()

    def insert(self, key: str, val: int) -> None:
        node = self.root
        for ch in key:
            node = node.children.setdefault(ch, TrieNode())
        node.val = val        

    def sum(self, prefix: str) -> int:
        def dfs(node):
            s = node.val
            for child in node.children:
                if child:
                    s += dfs(node.children[child])
            return s
            
      
        node = self.root
        for ch in prefix:
            if ch not in node.children:
                return 0
            node = node.children[ch]
        return dfs(node)


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)