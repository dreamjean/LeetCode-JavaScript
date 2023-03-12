/**
 * @param {number} initialEnergy
 * @param {number} initialExperience
 * @param {number[]} energy
 * @param {number[]} experience
 * @return {number}
 */
var minNumberOfHours = function(initialEnergy, initialExperience, energy, experience) {
  let [eng, exp, ans] = [initialEnergy, initialExperience, 0];
  
  for (let i = 0; i < energy.length; i++) {
    if (exp <= experience[i]) {
      ans += experience[i] - exp + 1;
      exp += experience[i] - exp + 1;
    }
    
    eng -= energy[i];
    exp += experience[i];
    
    if (eng <= 0) {
      ans += 1 - eng;
      eng = 1;
    }
  }
  
  return ans;
};