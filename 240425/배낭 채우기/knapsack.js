const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const weight = Array(n + 1).fill(0);
const value = Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
    [weight[i], value[i]] = input[i].split(' ').map(Number);
}

// dp[i][j] : 지금까지 i번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 j였을 때 얻을 수 있는 최대 가치
// 최대를 구하는 문제이므로, 초기에는 전부 INT_MIN을 넣어줍니다.
const dp = Array(m + 1).fill(Number.MIN_SAFE_INTEGER);

// 초기 조건으로 아직 아무런 보석도 고려해보지 않은 상태를 정의합니다.
// 따라서 지금까지 0번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 0이었을 때
// 가치를 0만큼 얻었으므로 dp[0][0] = 0을 초기 조건으로 설정합니다.
dp[0] = 0;

// 지금까지 i번째 보석까지 고려해봤고,
// 지금까지 고른 보석 무게의 합이 j였을 때 얻을 수 있는 최대 가치를 계산합니다.
for (let i = 1; i <= n; i++) {
    // 같은 보석을 중복하여 사용할 수 없기 때문에
    // 반복문을 거꾸로 돌려 보석을 중복하여 사용하는 것을 방지합니다.
    for (let j = m; j >= weight[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i]);
    }
}

// n개의 보석까지 전부 고려해봤을 때
// 무게의 합이 m을 넘지 않는 경우를 전부 조사하여
// 그 중 최댓값을 선택합니다.
let ans = 0;
for (let j = 0; j <= m; j++) {
    ans = Math.max(ans, dp[j]);
}

console.log(ans);