const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_R = 100;

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array.from(Array(n), () => Array(MAX_R + 1).fill(INT_MAX)));

function initialize() {
    // 전부 INT_MAX로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 1; k <= MAX_R; k++) {
                dp[i][j][k] = INT_MAX;
            }
        }
    }

    // 시작점의 경우 dp[0][0][num[0][0]] = num[0][0]으로 초기값을 설정해줍니다.
    dp[0][0][num[0][0]] = num[0][0];
    
    // 최좌측 열의 초기값을 설정해줍니다.
    for (let i = 1; i < n; i++) {
        for (let k = 1; k <= MAX_R; k++) {
            dp[i][0][Math.min(k, num[i][0])] = Math.min(
                dp[i][0][Math.min(k, num[i][0])],
                Math.max(dp[i - 1][0][k], num[i][0])
            );
        }
    }

    // 최상단 행의 초기값을 설정해줍니다.
    for (let j = 1; j < n; j++) {
        for (let k = 1; k <= MAX_R; k++) {
            dp[0][j][Math.min(k, num[0][j])] = Math.min(
                dp[0][j][Math.min(k, num[0][j])],
                Math.max(dp[0][j - 1][k], num[0][j])
            );
        }
    }
}

function solve() {
    // DP 초기값 설정
    initialize();

    // 탐색하는 위치의 위에 값과 좌측 값 중에 작은 값과
    // 해당 위치의 숫자 중에 최댓값을 구해줍니다.
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            for (let k = 1; k <= MAX_R; k++) {
                dp[i][j][Math.min(k, num[i][j])] = Math.min(
                    dp[i][j][Math.min(k, num[i][j])],
                    Math.max(Math.min(dp[i - 1][j][k], dp[i][j - 1][k]), num[i][j])
                );
            }
        }
    }
}

// DP로 문제를 해결합니다.
solve();

// 가능한 답 중 최적의 답을 계산합니다.
let ans = INT_MAX;
for (let k = 1; k <= MAX_R; k++) {
    if (dp[n - 1][n - 1][k] !== INT_MAX) {
        ans = Math.min(ans, dp[n - 1][n - 1][k] - k);
    }
}

console.log(ans);