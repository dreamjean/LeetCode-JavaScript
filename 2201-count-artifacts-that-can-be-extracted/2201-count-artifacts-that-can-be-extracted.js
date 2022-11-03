/**
 * @param {number} n
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function (n, artifacts, dig) {
  const grid = Array.from({ length: n }, () => new Array(n).fill(0));

  dig.forEach(([r, c]) => (grid[r][c] = 1));

  return artifacts.reduce((acc, curr) => acc + canBeExtracted(grid, curr), 0);
};

const canBeExtracted = (grid, artifact) => {
  const [r1, c1, r2, c2] = artifact;

  for (let i = r1; i <= r2; i++) {
    for (let j = c1; j <= c2; j++) {
      if (!grid[i][j]) return false;
    }
  }

  return true;
};
