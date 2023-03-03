class Solution:
    def getFolderNames(self, names: List[str]) -> List[str]:
        d = {}
        for name in names:
            if name in d:
                k = d[name]
                while f'{name}({k})' in d:
                    k += 1
                d[f'{name}({k})'] = 1
                d[name] = k + 1
            d[name] = 1
        return d.keys()
        
        
        
