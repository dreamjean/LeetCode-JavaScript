/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    
    indices.forEach(([r, c]) => {
        row[c] = !row[c];
        col[r] = !col[r];
    })
    
    const rr = row.reduce((cnt, curr) => cnt += curr ? 1 : 0, 0);
    const cc = col.reduce((cnt, curr) => cnt += curr ? 1 : 0, 0);
    
    return rr * m + cc * n - 2 * rr * cc;
};