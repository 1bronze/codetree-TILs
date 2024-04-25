const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;
const INT_MAX = Number.MAX_SAFE_INTEGER;

// 변수 선언 및 입력
const [n, m] = input[0].split(' ').map(Number);

const expList = Array(n + 1).fill(0);
const runtimeList = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    const [exp, runtime] = input[i].split(' ').map(Number);
    expList[i] = exp;
    runtimeList[i] = runtime;
}

// 최대 수행시간을 계산합니다.
let t = 0;
for (let i = 1; i <= n; i++)
    t += runtimeList[i];

// dp[i][j] : i번째 퀘스트까지 고려헀을 때
//            지금까지 퀘스트를 진행하는 데 걸리는 시간의 총 합이 j일 때
//            얻을 수 있었던 최대 경험치
const dp = Array.from(Array(n + 1), () => Array(t + 1).fill(0));

function initialize() {
    // 최대를 구하는 문제이므로
    // INT_MIN을 초기값으로 넣어줍니다.
    for (let i = 0; i <= n; i++) {
        for (let j = 0; j <= t; j++) {
            dp[i][j] = INT_MIN;
        }
    }

    // 초기조건은
    // 아직 아무런 퀘스트도 고려해보지 않은 상태입니다.
    // 현재 0번째 퀘스트까지 고려헀을 때
    // 수행시간은 0이었고, 이때 경험치 0을 얻게 됩니다.
    dp[0][0] = 0;
}

initialize();

// 점화식에 따라
// 값을 채워줍니다.
for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= t; j++) {
        // Case 1. 현재 퀘스트를 진행하여
        //         수행시간의 총 합이 j가 되기 위해서는
        //         i - 1번째 퀘스트 까지 수행시간이 j - runtime[i]가 되어야 합니다.
        if (j - runtimeList[i] >= 0) {
            dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - runtimeList[i]] + expList[i]);
        }

        // Case 2. 현재 퀘스트를 진행하지 않고
        //         수행시간의 총 합이 j가 되기 위해서는
        //         i - 1번째 퀘스트 까지 수행시간이 j가 되어야 합니다.
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j]);
    }
}

// n개의 퀘스트까지 고려했을 때
// 최대 경험치 합이 m 이상인 경우 중
// 최소 시간을 계산합니다. 
let ans = INT_MAX;
for (let j = 0; j <= t; j++) {
    if (dp[n][j] >= m) {
        ans = Math.min(ans, j);
    }
}

// 불가능하다면
// -1이 답이 됩니다.
if (ans === INT_MAX) {
    ans = -1;
}

console.log(ans);