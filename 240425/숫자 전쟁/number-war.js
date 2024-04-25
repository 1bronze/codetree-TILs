const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 각 플레이어의 카드 정보를 입력받습니다.
const n = Number(input[0]);
const a = [0].concat(input[1].split(' ').map(Number)).concat([0]);
const b = [0].concat(input[2].split(' ').map(Number)).concat([0]);

// dp 배열을 초기화합니다. 초기값은 -1로 설정합니다.
const dp = Array.from(Array(n + 5), () => Array(n + 5).fill(-1));

// 기본 케이스를 설정합니다.
dp[0][0] = 0;

// 각 경우의 수를 동적 프로그래밍으로 계산합니다.
// dp[i][j] :: 첫 번째 플레이어는 i번 카드까지, 두 번째 플레이어는 j번 카드까지 버렸을 때 나올 수 있는 최대 점수
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (dp[i][j] === -1) {
            continue;
        }

        // 카드 대결 - 첫 번째 플레이어의 카드가 더 작은 경우
        if (a[i + 1] < b[j + 1]) {
            dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
        }

        // 카드 대결 - 두 번째 플레이어의 카드가 더 작은 경우
        if (a[i + 1] > b[j + 1]) {
            dp[i][j + 1] = Math.max(dp[i][j + 1], dp[i][j] + b[j + 1]);
        }

        // 카드 버리기
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j + 1], dp[i][j]);
    }
}

// 결과를 계산하여 출력합니다.
let ans = 0;
for (let i = 0; i <= n; i++) {
    ans = Math.max(ans, dp[i][n]);
    ans = Math.max(ans, dp[n][i]);
}

console.log(ans);