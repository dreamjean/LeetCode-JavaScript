/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
  const first = suits[0];
  if (suits.every((ch) => ch === first)) return 'Flush';
  
  const nums = new Array(14).fill(0);
  let max = 0;
  
  ranks.forEach((num) => {
    nums[num]++;
    max = Math.max(max, nums[num]);
  })
  
  if (max >= 3) return 'Three of a Kind';
  
  return max === 2 ? "Pair" : "High Card";
};