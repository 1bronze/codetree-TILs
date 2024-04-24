const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const DIV = 10007;

const n = Number(input[0]);
const dp = Array.from(n + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= n; i++)
    dp[i] = (dp[i - 2] + dp[i - 1]) % DIV;

console.log(dp[n]);