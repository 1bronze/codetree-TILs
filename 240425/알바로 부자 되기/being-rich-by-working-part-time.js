const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);

// 초기 조건으로 아직 아무런 알바도 진행하지 못했을 경우에 대한
// 상태를 정의합니다. 편의를 위해 후에
// 0번째 index와 비교했을 때 항상 갱신될 수
// 있도록 s[0], e[0], p[0]를 전부 0으로 설정합니다.
let s = Array(n + 1).fill(0);
let e = Array(n + 1).fill(0);
let p = Array(n + 1).fill(0);

// 입력:
for (let i = 1; i <= n; i++) {
    [s[i], e[i], p[i]] = input[i].split(' ').map(Number);
}

// dp[i] : 마지막으로 고른 알바가 i번째 알바일 때,
// 얻을 수 있었던 최대 수익
// 최대를 구하는 문제이므로, 초기에는 전부 INT_MIN을 넣어줍니다.
let dp = Array(n + 1).fill(INT_MIN);

// 마지막으로 고른 알바가 0번째 알바일 때
// 지금까지 수익이 0이었다는 뜻으로
// dp[0] = 0을 초기 조건으로 설정합니다.
dp[0] = 0;

// 마지막으로 고른 알바가 i번째 알바일 때,
// 얻을 수 있었던 최대 수익을 계산합니다.
for (let i = 1; i <= n; i++) {
    // i번째 보다 앞에 있는 알바들 중 (j) i번째와 일하는 기간이
    // 겹치지 않는 알바들에 대해 해당 알바 다음에 i번째 알바를 진행하는 경우를
    // 계산하여 그 중 최대 수익을 dp[i]에 적어줍니다.
    // 알바끼리 겹치지 않기 위해서는 e[j] < s[i] 조건을 만족해야 합니다.
    for (let j = 0; j < i; j++) {
        if (e[j] < s[i]) {
            dp[i] = Math.max(dp[i], dp[j] + p[i]);
        }
    }
}

// 마지막으로 진행한 알바가 i번째인 경우를
// 전부 조사하여 그 중 수익을 가장 크게 얻을 수 있는 경우를 선택합니다.    
let answer = 0;
for (let i = 0; i <= n; i++) {
    answer = Math.max(answer, dp[i]);
}

console.log(answer);