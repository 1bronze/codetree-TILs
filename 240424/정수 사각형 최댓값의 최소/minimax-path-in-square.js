const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array(n).fill(0));


function initialize() {
    // 시작점의 경우 dp[0][0] = num[0][0]으로 초기값을 설정해줍니다
    dp[0][0] = num[0][0];

    // 최좌측 열의 초기값을 설정해줍니다.
    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], num[i][0]);
    }

    // 최상단 행의 초기값을 설정해줍니다.
    for (let j = 1; j < n; j++) {
        dp[0][j] = Math.max(dp[0][j - 1], num[0][j]);
    }
}

// 초기값 설정
initialize();

// 탐색하는 위치의 위에 값과 좌측 값 중에 작은 값과
// 해당 위치의 숫자 중에 최댓값을 구해줍니다.
for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
        dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
    }
}

console.log(dp[n - 1][n - 1]);