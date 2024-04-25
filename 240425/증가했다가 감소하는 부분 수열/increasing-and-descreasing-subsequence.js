const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const n = Number(input[0]);
const num = input[1].trim().split(' ').map(Number);
const dp = Array(n).fill(1);

for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++)
        if(num[i] > num[j])
            dp[i] = Math.max(dp[i], dp[j] + 1);
}

// console.log(dp);

for (let i = 1; i < n; i++) {
// Case 2. 증가하다가 감소하는 부분 수열의 길이 확인
    for (let j = 0; j < i; j++)
        if(num[i] < num[j])
            dp[i] = Math.max(dp[i], dp[j] + 1);
}

// console.log(dp);

let ans = 0;
for (let i = 0; i < n; i++)
    ans = Math.max(ans, dp[i]);

console.log(ans);