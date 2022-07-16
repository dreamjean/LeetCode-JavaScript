/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [m, n, oldColor] = [image.length, image[0].length, image[sr][sc]];
    
    if (oldColor === color) return image;
    
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    const dfs = (r, c) => {      
        image[r][c] = color;
        
        for (const [dx, dy] of dirs) {
            const [x, y] = [r + dx, c + dy];
            if (x < 0 || x >= m || y < 0 || y >= n || image[x][y] !== oldColor) continue;
            
            dfs(x, y);
        }
    }
    
    dfs(sr, sc);
    
    return image;
};