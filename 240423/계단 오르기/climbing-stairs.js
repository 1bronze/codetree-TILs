const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 10007;
const UNUSED = -1;

// 변수 선언 및 입력:
const n = Number(input[0]);
const dp = Array(n + 1).fill(UNUSED);

function recur(n) {
    if (dp[n] !== UNUSED)
        return dp[n];

    return (recur(n - 2) + recur(n - 3)) % MOD;
}

dp[0] = 1;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

console.log(recur(n));