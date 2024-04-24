const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;
const MAX_VALUE = 10000;

const n = Number(input[0]);

// dp[j] : 지금까지 마지막으로 고른 원소의 값이 j일 때의
// 최장 부분 수열의 길이
// 최대를 구하는 문제이므로, 초기에는 전부 INT_MIN을 넣어줍니다.
const dp = Array(MAX_VALUE + 1).fill(INT_MIN);

const a = [0].concat(input[1].trim().split(' ').map(Number));

// 0번째 원소에 0이라는 숫자로 항상 부분 수열을 만들되
// 이때까지의 부분 수열의 길이는 0이었기 때문에, 
// 각각의 위치에 있는 원소를 시작으로 하는 
// 모든 부분 수열을 만들 수 있게 해줍니다.
dp[0] = 0;

for (let i = 1; i <= n; i++) {
    // j가 a[i]인 경우만 고민해서 누적합니다.
    const j = a[i];
    for (let l = 0; l < a[i]; l++) {
        if (dp[l] !== INT_MIN) {
            dp[j] = Math.max(dp[j], dp[l] + 1);
        }
    }
}

// 마지막으로 끝나는 숫자가 j일 때의 부분 수열들 중
// 가장 길이가 긴 부분 수열을 고릅니다.
let answer = 0;
for (let j = 0; j <= MAX_VALUE; j++) {
    answer = Math.max(answer, dp[j]);
}

console.log(answer);