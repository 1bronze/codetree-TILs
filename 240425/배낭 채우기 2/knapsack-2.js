const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m] = input[0].split(' ').map(Number);

const weight = Array(n + 1).fill(0);
const value = Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    [weight[i], value[i]] = input[i].split(' ').map(Number);
}

// dp[i] : 지금까지 고른 보석 무게의 합이 i일 때 얻을 수 있는 최대 가치
let dp = new Array(m + 1).fill(0);

// 초기 조건은 아직 아무런 보석도 고르지 않은 경우인 합이 0이며, 얻을 수 있는 가치가 0이라는 정보입니다.
dp[0] = 0;

// 점화식에 따라 값을 채워줍니다.
for (let i = 1; i <= m; i++) {
    // 보석 무게의 합 i를 만들기 위해 마지막으로 길이가 j번 보석을 고른 경우에 대해 조사합니다.
    // 그 중 얻을 수 있는 최대 가치를 계산합니다.
    for (let j = 0; j < n; j++) {
        // i가 j번 보석의 무게인 weight[j]보다는 같거나 커야만 가능한 경우입니다.
        if (i >= weight[j]) {
            dp[i] = Math.max(dp[i], dp[i - weight[j]] + value[j]);
        }
    }
}

// 무게의 합이 m을 넘지만 않으면 되기에 0부터 m까지 무게를 전부 보며 그 중 얻을 수 있는 최대 가치를 구해줍니다.
let ans = 0;
for (let i = 0; i <= m; i++) {
    ans = Math.max(ans, dp[i]);
}

console.log(ans);