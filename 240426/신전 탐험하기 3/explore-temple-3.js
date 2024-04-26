const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// n과 m을 입력받습니다.
const [n, m] = input[0].split(' ').map(Number);

// 각 층의 보물의 개수 정보를 입력받습니다.
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(' ').map(Number))));

// 동적 프로그래밍을 사용하여 문제를 해결합니다.
// dp[i][j] :: i번째 층까지 올라왔고, 이번 층에서 j번째 방을 들어갔을 때 보물의 최대 개수
const dp = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= m; j++) {
        for (let k = 1; k <= m; k++) {
            if (j === k) continue;  // 이전 층에서 갔던 방과 똑같은 번호의 방을 들어갈 수 없습니다.
            dp[i + 1][k] = Math.max(dp[i + 1][k], dp[i][j] + a[i + 1][k]);
        }
    }
}

// 최대 효율을 계산합니다.
// 최대 효율을 계산합니다.
let ans = 0;
for (let j = 1; j <= m; j++)
    ans = Math.max(ans, dp[n][j]);

// 최대 효율을 출력합니다.
console.log(ans);