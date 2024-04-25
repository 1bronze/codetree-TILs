const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 계단의 층 수를 입력받습니다.
const n = Number(input[0]);
let coin = Array(n + 1).fill(0);

// 각 층의 동전의 개수를 입력받습니다.
coin = [0].concat(input[1].split(' ').map(Number));

const dp = Array.from(Array(n + 1), () => Array(5).fill(0));

// 기본 케이스를 초기화합니다.
dp[1][1] = coin[1];
if (n > 1) {
    dp[2][0] = coin[2];
    dp[2][2] = coin[1] + coin[2];
}

// 동적 프로그래밍을 사용하여 최대 가치를 계산합니다.
// dp[i][j] : i번 위치에 도착했을 때, 정확히 j번 1계단 올랐을 때의 최대 가치
for (let i = 3; i <= n; i++) {
    for (let j = 0; j < 4; j++) {
        if (dp[i - 2][j] !== 0) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 2][j] + coin[i]);
        }
        if (j && dp[i - 1][j - 1] !== 0) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + coin[i]);
        }
    }
}

// 가능한 모든 경우에서 최대 가치를 찾아 출력합니다.
let ans = 0;
for (let i = 0; i <= 3; i++)
    ans = Math.max(ans, dp[n][i]);

console.log(ans);