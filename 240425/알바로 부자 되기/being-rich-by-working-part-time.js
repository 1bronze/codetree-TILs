const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 가치를 DP로 저장?
// DP[i] = i번째까지 했을 때 최대로 얻을 수 있는 가치
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const dp = new Array(n).fill(0);

arr.sort((a, b) => a[0] - b[0]);

dp[0] = arr[0][2];

for(let i = 1; i < n; i++) {
    const cur = arr[i];

    for (let j = 0; j < i; j++) {
        const prev = arr[j];

        // Case 1. DP[j]에 더해지는 경우 > 그대로 최댓값
        // Case 2. DP[j]에 더해질 수 없는 경우 > cur[2] 또는 DP[j]가 최댓값
        if (cur[0] > prev[1])
            dp[i] = Math.max(dp[i], dp[j] + cur[2]);
        else
            dp[i] = Math.max(dp[i], Math.max(cur[2], dp[j]));
    }
}

console.log(dp[n - 1]);