/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
  const parent = {};
  const emailToName = {};
  const emails = {};
  
  const find = (x) => parent[x] === x ? parent[x] : (parent[x] = find(parent[x]));
  
  const union = (x, y) => {
    let rootX = find(x);
    let rootY = find(y);
    if (rootX !== rootY) parent[rootX] = rootY;
  }
  
  for (let [name, ...emails] of accounts) {
    for (let email of emails) {
      if (!(email in parent)) parent[email] = email;
      
      emailToName[email] = name;
      union(email, emails[0]);
    }
  }
  
  for (let email of Object.keys(parent)) {
    let root = find(email);
    emails[root] ? emails[root].push(email) : emails[root] = [email];
  }
  
  return Object.entries(emails).map(([key, values]) => [emailToName[key], ...values.sort()]);
};