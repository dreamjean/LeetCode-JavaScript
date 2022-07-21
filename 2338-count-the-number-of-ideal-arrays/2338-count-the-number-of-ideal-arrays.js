/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function (n, maxValue) {
  let ans = 0n;
  const ll = BigInt;
  const [M, N] = [ll(1e9 + 7), n + maxValue];
  const inv = new Array(N).fill(0);
  const fact = new Array(N).fill(0);
  const factinv = new Array(N).fill(0);
  inv[1] = fact[0] = fact[1] = factinv[0] = factinv[1] = 1n;

  for (let i = 2; i < N; i++) {
    inv[i] = M - (((M / ll(i)) * inv[M % ll(i)]) % M);
    fact[i] = (fact[i - 1] * ll(i)) % M;
    factinv[i] = (factinv[i - 1] * inv[i]) % M;
  }

  for (let i = 1; i <= maxValue; i++) {
    const map = numberOfFactor(i);
    let mul = 1n;
    Object.values(map).forEach(
      (val) => (mul = (mul * comb(n + val - 1, val, M, fact, factinv)) % M)
    );
    ans += mul;
  }

  return ans % M;
};

const comb = (a, b, M, fact, factinv) =>
  (((fact[a] * factinv[b]) % M) * factinv[a - b]) % M;

const numberOfFactor = (n) => {
  const map = {};
  for (let i = 2; i * i <= n; i++) {
    while (!(n % i)) {
      n /= i;
      map[i] ? map[i]++ : (map[i] = 1);
    }
  }

  if (n > 1) map[n] = 1;

  return map;
};
