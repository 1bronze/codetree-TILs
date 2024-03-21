const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 10000;

// 변수 선언 및 입력
const [n, k] = input[0].split(' ').map(Number);
const arr = new Array(MAX_NUM + 1).fill(0);

for (let i = 1; i <= n; i++) {
    const [x, c] = input[i].split(' ');
    const index = Number(x);
    
    arr[index] = (c === 'G') ? 1 : 2;
}

// 모든 구간의 시작점을 잡아봅니다.
let maxSum = 0;
for (let i = 0; i <= MAX_NUM - k; i++) {
    // 해당 구간 내 원소의 합을 구합니다.
    let sumInterval = 0;
    for (let j = i; j < i + k + 1; j++) {
        sumInterval += arr[j];
    }

    // 최댓값을 구합니다.
    maxSum = Math.max(maxSum, sumInterval);
}

console.log(maxSum);