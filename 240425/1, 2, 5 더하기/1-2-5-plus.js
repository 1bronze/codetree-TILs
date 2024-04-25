const MAX_M = 3;
const MOD = 10007;

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);

// dp[i] : 합 i를 만들기 위한 서로 다른 가짓수
const dp = Array(n + 1).fill(0);
const numbers = [1, 2, 5];

// 초기 조건은
// 아직 아무 수도 고르지 않았을 때이므로
// 합 0을 만들기 위한 가짓수가 1이 되어
// dp[0] = 1입니다.
dp[0] = 1;

// 점화식에 따라 값을 채워줍니다.
for (let i = 1; i <= n; i++) {
    // 마지막으로 고른 숫자가 numbers[j]인 경우에 대해
    // 가짓수를 더해줍니다.
    for (let j = 0; j < MAX_M; j++) {
        if (i >= numbers[j]) {
            dp[i] = (dp[i] + dp[i - numbers[j]]) % MOD;
        }
    }
}

// 합이 n이 되기 위한 가짓수를 출력합니다.
console.log(dp[n]);