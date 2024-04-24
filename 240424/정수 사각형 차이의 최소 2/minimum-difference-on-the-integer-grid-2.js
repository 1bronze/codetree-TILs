const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MAX = Number.MAX_SAFE_INTEGER;
const MAX_R = 100;

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input.slice(1, n + 1).map(line => line.split(' ').map(Number));
const dp = Array.from(Array(n), () => Array(n).fill(0));

let ans = INT_MAX;

function initialize() {
    // 전부 INT_MAX로 초기화합니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = INT_MAX;
        }
    }

    // 시작점의 경우 dp[0][0] = num[0][0]으로 초기값을 설정해줍니다.
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

function solve(lowerBound) {
    // lowerBound 미만의 값은 사용할 수 없도록
    // num값을 변경해줍니다.
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (num[i][j] < lowerBound) {
                num[i][j] = INT_MAX;
            }
        }
    }
    
    // DP 초기값 설정
    initialize();

    // 탐색하는 위치의 위에 값과 좌측 값 중에 작은 값과
    // 해당 위치의 숫자 중에 최댓값을 구해줍니다.
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.max(Math.min(dp[i - 1][j], dp[i][j - 1]), num[i][j]);
        }
    }
    
    return dp[n - 1][n - 1];
}

// 최솟값을 k라고 가정했을 때
// lowerBound 이상의 수들만 사용하여
// 이동한다는 조건하에서
// 최댓값을 최소로 만드는 DP 문제를 풀어줍니다.
for (let lowerBound = 1; lowerBound <= MAX_R; lowerBound++) {
    const upperBound = solve(lowerBound);
    
    // 다 진행했음에도 여전히 INT_MAX라면
    // 그러한 이동이 불가능하다는 뜻이므로
    // 패스합니다.
    if (upperBound === INT_MAX) {
        continue;
    }
    
    // 답을 갱신합니다.
    ans = Math.min(ans, upperBound - lowerBound);
}

console.log(ans);