class Solution:
    def outerTrees(self, trees: List[List[int]]) -> List[List[int]]:
        def cmp(p1, p2, p3):
            x1, y1 = p1
            x2, y2 = p2
            x3, y3 = p3
            return (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
        
        
        trees.sort()
        lower = []
        upper = []
        for tree in trees:
            while len(lower) >= 2 and cmp(lower[-2], lower[-1], tree) > 0:
                lower.pop()
            while len(upper) >= 2 and cmp(upper[-2], upper[-1], tree) < 0:
                upper.pop()
            lower.append(tuple(tree))
            upper.append(tuple(tree))
        return list(set(lower + upper))