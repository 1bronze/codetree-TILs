const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

const MAX_NUM = 19;
const dp = Array(MAX_NUM + 1).fill(0);

function getNumOfUniqueBst(n) {
    let numOfUniqueBst = 0;
    
    for (let i = 0; i < n; i++) {
        numOfUniqueBst += dp[i] * dp[n - i - 1];
    }
    
    return numOfUniqueBst;
}

dp[0] = dp[1] = 1;

for (let i = 2; i <= n; i++) {
    dp[i] = getNumOfUniqueBst(i);
}

console.log(dp[n]);