const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 각 층의 보물의 개수 정보를 입력받습니다.
const n = Number(input[0]);
const a = [0].concat(input.slice(1, 1 + n).map(line => [0].concat(line.split(' ').map(Number))));

// 동적 프로그래밍을 사용하여 최대 점수를 계산합니다.
// dp[i][j] : i번째 층까지 올라왔을 때,
// j번 방(j = 1일 때 : 왼쪽, j = 2일 때 : 가운데, j = 3일 때 : 오른쪽)
// 을 골랐을 때 가져갈 수 있는 보물의 최대 개수
const dp = Array.from(Array(1005), () => Array(4).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 1; j < 4; j++) {
        for (let k = 1; k < 4; k++) {
            // 이전 층과 같은 방을 고르지 않는 경우에 대해 계산합니다.
            if (j !== k) {
                dp[i + 1][k] = Math.max(dp[i + 1][k], dp[i][j] + a[i + 1][k]);
            }
        }
    }
}

// 최종적으로 가능한 최대 점수를 계산합니다.
let ans = 0;
for (let i = 1; i < n; i++)
    ans = Math.max(ans, dp[n][i]);

// 계산된 최대 점수를 출력합니다.
console.log(ans);