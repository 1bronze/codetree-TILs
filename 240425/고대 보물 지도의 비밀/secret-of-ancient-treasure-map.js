const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 최댓값을 나타내는 상수입니다.
const INF = Number.MAX_SAFE_INTEGER;

// n과 k 값을 입력받습니다.
const [n, k] = input[0].split(' ').map(Number);

// 보물 지도의 정보를 입력받습니다.
const a = [0].concat(input[1].split(' ').map(Number));

// 동적 프로그래밍을 이용해 최대 합을 구합니다.
// dp[i][j] :: i번째 숫자를 마지막으로, 음수가 j번 나타났을 때 나타나는 연속합 중 최댓값
const dp = Array.from(Array(n + 1), () => Array(k + 1).fill(-INF));
let ans = -INF;

for (let i = 1; i <= n; i++) {
    // a[i]가 0 이상인 경우
    if (a[i] >= 0) {
        for (let j = 0; j <= k; j++) {
            dp[i][j] = Math.max(dp[i - 1][j] + a[i], a[i]);
            ans = Math.max(ans, dp[i][j]);
        }
    // a[i]가 음수인 경우
    } else {
        // 최대 k개 까지만 음수가 나타날 수 있게 관리합니다.
        for (let j = 1; j <= k; j++) {
            dp[i][j] = Math.max(dp[i - 1][j - 1] + a[i], a[i]);
            ans = Math.max(ans, dp[i][j]);
        }
    }
}

// 최종 결과를 출력합니다.
console.log(ans);