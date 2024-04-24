const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// dp[i] :
// 마지막으로 고른 원소의 위치가 i인
// 부분 수열 중 최장 감소 부분 수열의 길이
const dp = Array(n).fill(0);

for (let i = 0; i < n; i++) {
    // 현재 위치에서 시작할 때에는
    // dp값이 1이 되므로
    // 초기 셋팅은 1입니다.
    dp[i] = 1;

    // i번째 보다 앞에 있는 원소들 중
    // arr[i]보다는 값이 큰 곳에
    // 새로운 원소인 arr[i]를 추가했을 때의
    // 부분 수열 중 최대 감소 부분 수열의 길이를 계산합니다.
    for (let j = 0; j < i; j++) {
        if (arr[j] > arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

// 마지막 원소의 위치가 i일 때의 부분 수열들 중
// 가장 길이가 긴 감소 부분 수열을 고릅니다.
let ans = 0;
for (let i = 0; i < n; i++) {
    ans = Math.max(ans, dp[i]);
}

console.log(ans);