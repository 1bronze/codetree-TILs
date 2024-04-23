const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

dp[1] = dp[2] = 1;

for (let i = 3; i <= n; i++)
    dp[n] = dp[n - 1] + dp[n - 2];

console.log(dp[n]);