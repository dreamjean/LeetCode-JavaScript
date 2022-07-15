/**
 * @param {number} n
 * @param {number} maxValue
 * @return {number}
 */
var idealArrays = function(n, maxValue) {
    let ans = 0n;
    const ll = BigInt;
    const [MOD, N] = [ll(10 ** 9 + 7), n + maxValue];
    const inv = new Array(N).fill(0);
    const fact = new Array(N).fill(0);
    const factinv = new Array(N).fill(0);
    inv[1] = fact[0] = fact[1] = factinv[0] = factinv[1] = 1n;
    
    for (let i = 2; i < N; i++) {
        inv[i] = MOD - MOD / ll(i) * inv[MOD % ll(i)] % MOD;
        fact[i] = fact[i - 1] * ll(i) % MOD;
        factinv[i] = factinv[i - 1] * inv[i] % MOD;
    }
    
    for (let i = 1; i <= maxValue; i++) {
        const map = numberOfFactor(i);
        let mul = 1n;
        Object.values(map).forEach(num => mul = mul * comb(n + num - 1, num, fact, factinv, MOD) % MOD);
        ans += mul;
    }

    
    return ans % MOD;
};

const comb = (a, b, fact, factinv, M) => fact[a] * factinv[b] % M * factinv[a - b] % M;

const numberOfFactor = n => {
    const map = {};
    for (let i = 2; i * i <= n; i++) {
        while (!(n % i)) {
            n /= i;
            map[i] ? map[i]++ : map[i] = 1;
        }        
    }
    if (n > 1) map[n] = 1;
    
    return map;
}