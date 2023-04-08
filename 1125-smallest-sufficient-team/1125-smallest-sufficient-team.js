/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  const skillMap = req_skills.reduce((acc, skill, i) => (acc[skill] = i, acc), {});
  const dpMap = new Map([[0, []]]);
  
  people.forEach((person, i) => {
    let skill = person.reduce((acc, curr) => acc |= (1 << skillMap[curr]), 0);
    for (let [currSkill, team] of dpMap) {
      let totalSkill = currSkill | skill;
      if (!dpMap.has(totalSkill) || dpMap.get(totalSkill).length > team.length + 1)
        dpMap.set(totalSkill, [...team, i]);
    }
  })
  
  return dpMap.get((1 << req_skills.length) - 1);
};