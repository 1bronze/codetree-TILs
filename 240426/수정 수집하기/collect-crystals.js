const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// n과 k 값을 입력받습니다.
const [n, k] = input[0].split(' ').map(Number);
// 문자열 str을 입력받습니다.
let str = input[1];
// 문자열 앞에 공백을 추가하여 인덱스를 1부터 시작하게 합니다.
str = " " + str;

// dp 배열을 초기화합니다.
const INT_MIN = Number.MIN_SAFE_INTEGER;
const dp = Array.from(Array(n + 2), () =>
    Array.from(Array(k + 2), () => Array(2).fill(INT_MIN)));

// 초기 상태를 설정합니다.
dp[0][0][0] = 0;
dp[0][1][1] = 0;

// 동적 프로그래밍을 이용하여 문제를 해결합니다.
// dp[i][j][k] :: i번째 수정까지 떨어졌을 때, 총 j번 엘라가 움직였고,
// 현재 위치가 k일 때 (k = 0일 때 왼쪽, k = 1일 때 오른쪽) 수집할 수 있는 수정의 최대 개수
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= k; j++) {
        // 현재 위치가 왼쪽일 때를 관리합니다.
        if (dp[i][j][0] !== INT_MIN) {
            if (str[i + 1] === 'L') {
                dp[i + 1][j][0] = Math.max(dp[i + 1][j][0], dp[i][j][0] + 1);
                dp[i + 1][j + 1][1] = Math.max(dp[i + 1][j + 1][1], dp[i][j][0]);
            } else {
                dp[i + 1][j][0] = Math.max(dp[i + 1][j][0], dp[i][j][0]);
                dp[i + 1][j + 1][1] = Math.max(dp[i + 1][j + 1][1], dp[i][j][0] + 1);
            }
        }

        // 현재 위치가 오른쪽일 때를 관리합니다.
        if (dp[i][j][1] !== INT_MIN) {
            if (str[i + 1] === 'L') {
                dp[i + 1][j + 1][0] = Math.max(dp[i + 1][j + 1][0], dp[i][j][1] + 1);
                dp[i + 1][j][1] = Math.max(dp[i + 1][j][1], dp[i][j][1]);
            } else {
                dp[i + 1][j + 1][0] = Math.max(dp[i + 1][j + 1][0], dp[i][j][1]);
                dp[i + 1][j][1] = Math.max(dp[i + 1][j][1], dp[i][j][1] + 1);
            }
        }
    }
}

// 최종 결과를 계산합니다.
let ans = 0;
for (let j = 0; j <= k; j++) {
    ans = Math.max(ans, dp[n][j][0]);
    ans = Math.max(ans, dp[n][j][1]);
}

// 결과를 출력합니다.
console.log(ans);