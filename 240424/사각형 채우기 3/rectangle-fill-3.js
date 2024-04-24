const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 1000000007;

const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 2;
dp[2] = 7;

for (let i = 3; i <= n; i++) {
    dp[i] += dp[i - 1] * 2;
    dp[i] += dp[i - 2] * 3;

    for (let j = i - 3; j >= 0; j -= 2)
        dp[i] += dp[j] * 2;
    for (let j = i - 4; j >= 0; j -= 2)
        dp[i] += dp[j] * 2;

    dp[i] %= MOD;
}

console.log(dp[n]);