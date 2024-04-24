const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 10007;

// 변수 선언 및 입력:
const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i<= n; i++)
    dp[i] = (dp[i - 1] + dp[i - 2] * 2) % MOD;

console.log(dp[n]);