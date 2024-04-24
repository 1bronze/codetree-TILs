const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 1000000007;
const UNUSED = -1;

const n = Number(input[0]);
const dp = Array(n + 1).fill(UNUSED);

function recur(n) {
    if (dp[n] !== UNUSED)
        return dp[n];

    let ret = 0;
    ret += recur(n - 1) * 2;
    ret += recur(n - 2) * 3;

    for (let i = n - 3; i >= 0; i -= 2)
        ret += recur(i) * 2;
    for (let i = n - 4; i >= 0; i -= 2)
        ret += recur(i) * 2;

    return ret;
}


dp[0] = 1;
dp[1] = 2;
dp[2] = 7;

console.log(recur(n));