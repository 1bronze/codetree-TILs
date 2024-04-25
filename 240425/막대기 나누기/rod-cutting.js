const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const profit = [0].concat(input[1].split(' ').map(Number));

// dp[i] : 길이 i인 막대기를 이용해 얻을 수 있는 최대 수익
const dp = new Array(n + 1).fill(0);

// 초기 조건은 길이가 0인 막대기를 이용해 얻을 수 있는 최대 수익은 0이라는 정보입니다.
dp[0] = 0;

// 점화식에 따라 값을 채워줍니다.
for (let i = 1; i <= n; i++) {
    // 합 i를 만들기 위해 마지막으로 길이가 j인 막대기를 사용한 경우에 대해 조사합니다.
    // 그 중 얻을 수 있는 최대 수익을 계산합니다.
    for (let j = 1; j <= i; j++) {
        dp[i] = Math.max(dp[i], dp[i - j] + profit[j]);
    }
}

// 길이가 n인 막대기를 이용해 얻을 수 있는 최대 수익을 출력합니다.
console.log(dp[n]);