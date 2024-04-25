const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

const [n, m] = input[0].split(' ').map(Number);

const weight = Array(n + 1).fill(0);
const value = Array(n + 1).fill(0);

// 1번째 인덱스부터 사용하기 위하여 배열에 값을 넣어줍니다.
for (let i = 1; i <= n; i++) {
    [weight[i], value[i]] = input[i].split(' ').map(Number);
}

// dp[i][j] : 지금까지 i번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 j였을 때 얻을 수 있는 최대 가치
// 최대를 구하는 문제이므로, 초기에는 전부 INT_MIN을 넣어줍니다.
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(INT_MIN));

// 초기 조건으로 아직 아무런 보석도 고려해보지 않은 상태를 정의합니다.
// 따라서 지금까지 0번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 0이었을 때
// 가치를 0만큼 얻었으므로 dp[0][0] = 0을 초기 조건으로 설정합니다.
dp[0][0] = 0;

// 지금까지 i번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 j였을 때 얻을 수 있는 최대 가치를 계산합니다.
for (let i = 1; i <= n; i++) {
    // 이런 상황을 만들기 위한 선택지는 크게 2개 입니다.
        
    // Case 1
    // i번 보석을 배낭에 집어 넣어 무게의 합이 j가 된 경우입니다.
    // 이 경우에는 i번 보석을 포함하여 무게의 합이 j가 되어야 하므로
    // i - 1번째까지 고려하여 고른 보석 무게의 합이 j - weight[i]였어야 합니다.
    // 따라서 이 상황에서의 최대 가치를 의미하는 dp[i - 1][j - weight[i]]에
    // 새로 얻게 되는 i번 보석의 가치 value[i]를 더한 값이 새로운 선택지가 됩니다. 
    // 단, j < weight[i]인 경우에는 i번째 보석을 추가하여 무게가 j가 될 수 없으므로
    // j >= weight[i]인 경우에만 가능합니다.

    // Case 2
    // i번 보석을 선택하지 않고 무게의 합이 j가 된 경우입니다.
    // 이 경우에는 i번 보석을 제외하고 무게의 합이 j가 되어야 하므로
    // i - 1번째까지 고려하여 고른 보석 무게의 합이 j였어야만 합니다. 
    // 따라서 이 상황에서의 최대 가치를 의미하는 dp[i - 1][j] 값이 하나의 선택지가 됩니다.
    for (let j = 0; j <= m; j++) {
        // j >= weight[i]인 경우에는 Case 1, Case 2 중 더 좋은 값을 선택합니다.
        if (j >= weight[i]) {
            dp[i][j] = Math.max(dp[i - 1][j - weight[i]] + value[i], dp[i - 1][j]);
        } 
        // j < weight[i]인 경우에는, Case 2만 가능합니다.
        else {
            dp[i][j] = dp[i - 1][j];
        }
    }
}

// n개의 보석까지 전부 고려해봤을 때
// 무게의 합이 m을 넘지 않는 경우를 전부 조사하여
// 그 중 최댓값을 선택합니다.
let ans = 0;
for (let j = 0; j <= m; j++) {
    ans = Math.max(ans, dp[n][j]);
}

console.log(ans);