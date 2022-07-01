/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const [m, n, oldColor] = [image.length, image[0].length, image[sr][sc]];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    
    if (oldColor === color) return image;
    
    const fill = (row, col) => {        
        image[row][col] = color;
        
        for (const [dx, dy] of dirs) {
            const [x, y] = [row + dx, col + dy];
            if (x < 0 || x >= m || y < 0 || y >= n || image[x][y] !== oldColor) continue;
            
            fill(x, y);
        } 
    }
    
    fill(sr, sc);
    
    return image;
};