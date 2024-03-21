const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const arr = input[1].trim().split(' ').map(Number);

// 모든 구간의 시작점을 잡아봅니다.
let maxSum = 0;
for (let i = 0; i <= n - k; i++) {
    // 해당 구간 내 원소의 합을 구합니다.
    let intervalSum = 0;
    for (let j = i; j < i + k; j++) {
        intervalSum += arr[j];
    }

    // 최댓값을 구합니다.
    maxSum = Math.max(maxSum, intervalSum);
}

console.log(maxSum);