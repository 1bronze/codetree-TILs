const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let a = [0].concat(input[1].split(" ").map(Number));
let b = [0].concat(input[2].split(" ").map(Number));

// 배열을 뒤집습니다.
a.reverse();
b.reverse();

const INF = Number.MAX_SAFE_INTEGER;

const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
const path = Array.from(Array(n + 1), () => Array(m + 1).fill([0, 0]));
const curBest = Array.from(Array(n + 1), () => Array(m + 1).fill(INF));

// 최장 공통 부분 수열을 찾기 위한 동적 프로그래밍을 수행합니다.
// dp[i][j] :: 문자열 a는 i번째까지, 문자열 b는 j번째까지 보았을 때 최장 공통 부분 수열의 길이
// cur_best[i][j] :: 문자열 a는 i번째까지, 문자열 b는 j번째까지 보았을 때 최장 공통 부분 수열 중
// 가장 마지막으로 선택된 값을 최소화시킨 수열의 그 최솟값
// path[i][j] : 그러한 최장 공통 부분 수열이 어느 이전 정보에서 왔는지의 정보
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        // 각 단계에서 최적의 해를 찾습니다.
        if (dp[i - 1][j] > dp[i][j] || (dp[i - 1][j] === dp[i][j] && curBest[i - 1][j] < curBest[i][j])) {
            dp[i][j] = dp[i - 1][j];
            path[i][j] = [i - 1, j];
            curBest[i][j] = curBest[i - 1][j];
        }
        
        if (dp[i][j - 1] > dp[i][j] || (dp[i][j - 1] === dp[i][j] && curBest[i][j - 1] < curBest[i][j])) {
            dp[i][j] = dp[i][j - 1];
            path[i][j] = [i, j - 1];
            curBest[i][j] = curBest[i][j - 1];
        }

        if (a[i] === b[j] && (dp[i - 1][j - 1] + 1 > dp[i][j] || (dp[i - 1][j - 1] + 1 === dp[i][j] && a[i] < curBest[i][j]))) {
            dp[i][j] = dp[i - 1][j - 1] + 1;
            path[i][j] = [i - 1, j - 1];
            curBest[i][j] = a[i];
        }
    }
}

// 최장 공통 부분 수열을 추적합니다.
let lcs = [];
let [i, j] = [n, m];
while (i > 0 && j > 0) {
    if (path[i][j][0] === i - 1 && path[i][j][1] === j - 1 && a[i] === b[j]) {
        lcs.push(a[i]);
        i -= 1;
        j -= 1;
    } else {
        [i, j] = path[i][j];
    }
}

// 최장 공통 부분 수열을 출력합니다.
console.log(lcs.join(' '));