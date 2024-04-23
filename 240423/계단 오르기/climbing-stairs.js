const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 10007;

const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

for(let i = 4; i <= n; i++)
    dp[i] = (dp[i - 2] + dp[i - 3]) % MOD;

console.log(dp[n]);