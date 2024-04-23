const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MOD = 10007;

// 변수 선언 및 입력:
const n = Number(input[0]);
const dp = Array(n + 1).fill(0);

// 초기 조건 설정
dp[0] = 1;
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;

// 점화식에 따라 dp값 채우기
for(let i = 4; i <= n; i++)
    dp[i] = (dp[i - 2] + dp[i - 3]) % MOD;

console.log(dp[n]);