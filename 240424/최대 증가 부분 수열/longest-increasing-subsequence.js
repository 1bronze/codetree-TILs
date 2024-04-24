const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const a = [0].concat(input[1].split(' ').map(Number));
const dp = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    // i번째 보다 앞에 있는 원소들 중 a[i]보다는 값이 작은 곳을 골라 바로 그 뒤에
    // 새로운 원소인 a[i]를 추가했을 때의 부분 수열 중 최대 부분 수열의 길이를 계산합니다.
    for (let j = 0; j < i; j++) {
        if (a[j] < a[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
        }
    }
}

// 마지막 원소의 위치가 i일 때의 부분 수열들 중 가장 길이가 긴 부분 수열을 고릅니다.
console.log(Math.max(...dp));