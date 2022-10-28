/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keys = ['type', 'color', 'name'];

  return items.reduce(
    (acc, curr) => acc + (curr[keys.indexOf(ruleKey)] === ruleValue),
    0
  );
};
