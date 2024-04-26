const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 축구와 야구 점수를 저장할 배열을 입력받습니다.
const n = Number(input[0]);
const soccer = Array(n + 1).fill(0);
const baseball = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
    const [soccerScore, baseballScore] = input[i].split(' ').map(Number);
    soccer[i] = soccerScore;
    baseball[i] = baseballScore;
}

// 동적 프로그래밍을 사용하여 최대 점수를 계산합니다.
// dp[i][j][k] :: 지금까지 앞 i명의 학생을 보며, 축구부에 j명을, 야구부에 k명을 선택했을 때 나올 수 있는 능력의 합의 최대
const dp = Array.from(Array(1005), () => Array.from(Array(15), () => Array(10).fill(0)));

for (let i = 0; i < n; i++) {
    for (let s = 0; s < 12; s++) {
        for (let b = 0; b < 10; b++) {
            // 현재 상태를 다음 상태로 전이시킵니다.
            dp[i + 1][s][b] = Math.max(dp[i + 1][s][b], dp[i][s][b]);

            // 축구 점수를 추가할 수 있는 경우를 고려합니다.
            if (s != 11) {
                dp[i + 1][s + 1][b] = Math.max(dp[i + 1][s + 1][b], dp[i][s][b] + soccer[i + 1]);
            }

            // 야구 점수를 추가할 수 있는 경우를 고려합니다.
            if (b != 9) {
                dp[i + 1][s][b + 1] = Math.max(dp[i + 1][s][b + 1], dp[i][s][b] + baseball[i + 1]);
            }
        }
    }
}

// 계산된 최대 점수를 출력합니다.
console.log(dp[n][11][9]);