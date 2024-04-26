// 필요한 상수를 정의합니다.
const MOD = 10**9 + 7;
const MAXN = 1005;

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// n 값을 입력받습니다.
const n = Number(input[0]);

// 동적 프로그래밍 배열을 초기화합니다.
let dp = Array.from(Array(MAXN), () => Array.from(Array(5), () => new Array(5).fill(0)));

// 초기 상태를 설정합니다.
dp[1][1][0] = 1; // 첫 번째 날에 T를 받은 경우
dp[1][0][1] = 1; // 첫 번째 날에 B를 받은 경우
dp[1][0][0] = 1; // 첫 번째 날에 G를 받은 경우

// 동적 프로그래밍을 사용해 문제를 해결합니다.
for (let i = 1; i < n; i++) {
    for (let j = 0; j < 3; j++) {
        for (let k = 0; k < 3; k++) {
            // 다음 날로 넘어가는 경우의 수를 갱신합니다.
            dp[i + 1][j + 1][0] = (dp[i + 1][j + 1][0] + dp[i][j][k]) % MOD;
            dp[i + 1][j][0] = (dp[i + 1][j][0] + dp[i][j][k]) % MOD;
            if (k < 2) {
                dp[i + 1][j][k + 1] = (dp[i + 1][j][k + 1] + dp[i][j][k]) % MOD;
            }
        }
    }
}

// 최종 결과를 계산합니다.
let ans = 0;
for (let j = 0; j < 3; j++) {
    for (let k = 0; k < 3; k++) {
        ans = (ans + dp[n][j][k]) % MOD;
    }
}

// 결과를 출력합니다.
console.log(ans);