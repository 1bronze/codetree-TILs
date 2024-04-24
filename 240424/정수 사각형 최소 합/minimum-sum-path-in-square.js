const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const num = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array(n).fill(0));

function initialize() {
    // 시작점의 경우 dp[0][n - 1] = num[0][n - 1]으로 초기값을 설정해줍니다
    dp[0][n - 1] = num[0][n - 1];

    // 최우측 열의 초기값을 설정해줍니다.
    for (let i = 1; i < n; i++) {
        dp[i][n - 1] = dp[i - 1][n - 1] + num[i][n - 1];
    }

    // 최상단 행의 초기값을 설정해줍니다.
    for (let j = n - 2; j >= 0; j--) {
        dp[0][j] = dp[0][j + 1] + num[0][j];
    }
}

// 초기값 설정
initialize();

// 탐색하는 위치의 위에 값과 우측 값 중에 작은 값에
// 해당 위치의 숫자를 더해줍니다.
for (let i = 1; i < n; i++) {
    for (let j = n - 2; j >= 0; j--) { 
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j + 1]) + num[i][j];
    }
}

console.log(dp[n - 1][0]);