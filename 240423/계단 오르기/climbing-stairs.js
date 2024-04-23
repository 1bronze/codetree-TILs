const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;

const n = Number(input[0]);
const dp = Array(n + 1).fill(UNUSED);

function recur(n) {
    if (dp[n] !== UNUSED)
        return dp[n];

    return (dp[n - 2] + dp[n - 3]) % 10007;
}

dp[0] = 1;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

console.log(recur(n));