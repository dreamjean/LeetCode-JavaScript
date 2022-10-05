/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
  const map = {};

  for (let cpdomain of cpdomains) {
    let [rep, domain] = cpdomain.split(" ");
    while (domain) {
      map[domain] ? (map[domain] += +rep) : (map[domain] = +rep);
      domain = domain.replace(/^[a-z]+\.?/, "");
    }
  }

  return Object.entries(map).map(([domain, rep]) => `${rep} ${domain}`);
};
