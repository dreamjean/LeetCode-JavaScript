/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);
    
    return spells.map(spell => spell = numberOfSuccess(spell, success, potions))
};

const numberOfSuccess = (num, target, arr = []) => {
    let [left, right] = [0, arr.length - 1];
    
    while (left <= right) {
        const mid = (left + right) >>> 1;
        if (arr[mid] * num >= target) right = mid - 1;
        else left = mid + 1;
    }
    
    return arr.length - left;
}