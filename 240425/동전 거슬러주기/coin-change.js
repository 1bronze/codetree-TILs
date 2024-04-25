const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const coin = [0].concat(input[1].split(' ').map(Number));

const MAX_ANS = 10001;

// dp[i] : 지금까지 선택한 동전의 합이 i일 때, 가능한 최소 동전 개수
// 최소를 구하는 문제이므로, 초기에는 전부 MAX_ANS을 넣어줍니다.
let dp = Array(m + 1).fill(MAX_ANS);

// 초기 조건으로 아직 아무런 동전도 고르지 않은 상태를 정의합니다.
// 따라서 지금까지 선택한 동전의 합이 0이며
// 지금까지 사용한 동전의 수는 0개이므로,
// dp[0] = 0을 초기 조건으로 설정합니다.
dp[0] = 0;

// 지금까지 선택한 동전의 합이 i이기 위해 
// 필요한 최소 동전 개수를 계산합니다.
for (let i = 1; i <= m; i++) {
    // 합 i를 만들기 위해 마지막으로 사용한 동전이 j번째 동전이었을 경우를
    // 전부 고려해봅니다. 마지막으로 사용한 동전이 j번째 동전이었을 경우
    // 최종 합이 i가 되기 위해서는 이전 합이 i - coin[j] 였어야 하므로
    // 해당 상태를 만들기 위해 필요한 최소 동전의 수인 
    // dp[i - coin[j]]에 동전을 새로 1개 추가했으므로
    // 1을 더한 값들 중 최솟값을 선택하면 됩니다.
    // 단, 합 i가 coin[j]보다 작은 경우에는 j번째
    // 동전을 써서 합 i를 절대 만들 수 없으므로
    // i >= coin[j] 조건을 만족하는 경우에 대해서만 고려합니다.
    for (let j = 1; j <= n; j++) {
        if (i >= coin[j]) {
            dp[i] = Math.min(dp[i], dp[i - coin[j]] + 1);
        }
    }
}

// 합을 정확히 m을 만들었을 때
// 필요한 최소 동전의 수를 구해야 하므로
// dp[m]이 답이 됩니다.
let minCnt = dp[m];

// 거슬러주는 것이 불가능할 시, -1을 출력합니다.
if (minCnt === MAX_ANS) {
    minCnt = -1;
}

console.log(minCnt);