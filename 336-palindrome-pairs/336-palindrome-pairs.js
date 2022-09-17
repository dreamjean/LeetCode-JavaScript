/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  const map = new Map();
  const set = new Set();
  const n = words.length;
  const ans = [];

  words.forEach((word, i) => {
    map.set(word, i);
    set.add(word.length);
  });

  const sizes = [...set].sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    const size = words[i].length;

    if (size === 1 && map.has("")) ans.push([i, map.get("")], [map.get(""), i]);
    if (size > 1) {
      const reverse = words[i].split("").reverse().join("");

      if (map.has(reverse) && map.get(reverse) !== i)
        ans.push([i, map.get(reverse)]);

      for (let j of sizes) {
        if (j === size) break;
        if (isPalindrome(reverse, 0, size - 1 - j)) {
          const s1 = reverse.slice(size - j);
          if (map.has(s1)) ans.push([i, map.get(s1)]);
        }

        if (isPalindrome(reverse, j, size - 1)) {
          const s2 = reverse.slice(0, j);
          if (map.has(s2)) ans.push([map.get(s2), i]);
        }
      }
    }
  }

  return ans;
};

const isPalindrome = (word, l, r) => {
  while (l < r) {
    if (word[l++] !== word[r--]) return false;
  }

  return true;
};
