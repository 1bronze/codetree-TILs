const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const UNUSED = -1;

const n = Number(input[0]);
const dp = Array(n + 1).fill(UNUSED);

function recur(n) {
    if (dp[n] !== UNUSED)
        return dp[n];

    if (n === 1)
        return 0;
    else if (n === 2 || n === 3)
        return 1;

    return (dp[n - 2] + dp[n - 3]) % 10007;
}

console.log(recur(n));