const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const a = input[0];
const b = input[1];

const n = a.length, m = b.length;
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
const path = Array.from(Array(n + 1), () => Array(m + 1).fill([0, 0]));

// dp 배열을 계산하고 각 단계에서의 경로를 추적합니다.
// dp[i][j] : 문자열 a를 i번째까지 확인하고, 문자열 b를 j번째까지 확인했을 때
// 최장 공통 부분 수열의 길이
// path[i][j] : 그러한 최장 공통 부분 수열이 어느 이전 정보에서 왔는지의 정보
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        if (dp[i][j] < dp[i-1][j]) {
            dp[i][j] = dp[i-1][j];
            path[i][j] = [i-1, j];
        }
        
        if (dp[i][j] < dp[i][j-1]) {
            dp[i][j] = dp[i][j-1];
            path[i][j] = [i, j-1];
        }

        if (a[i-1] === b[j-1] && dp[i][j] < dp[i-1][j-1] + 1) {
            dp[i][j] = dp[i-1][j-1] + 1;
            path[i][j] = [i-1, j-1];
        }
    }
}

// 최장 공통 부분 수열을 추적하여 결과를 구성합니다.
let lcs = [];
let i = n, j = m;
while (i > 0 && j > 0) {
    if (path[i][j][0] === i - 1 && path[i][j][1] === j - 1 && a[i - 1] === b[j - 1]) {
        lcs.push(a[i - 1]);
        i -= 1;
        j -= 1;
    } else {
        [i, j] = path[i][j];
    }
}

// 최장 공통 부분 수열을 출력합니다.
console.log(lcs.reverse().join(''));