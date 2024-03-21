const fs = require("fs");
const input = fs.readFileSync(0, "utf8").toString().trim().split("\n");

const MAX_NUM = 100;

// 변수 선언 및 입력
let index = 0;
const [n, k] = input[index++].split(" ").map(Number);
const arr = Array(MAX_NUM + 1).fill(0);

for (let i = 0; i < n; i++) {
    const [a, x] = input[index++].split(" ").map(Number);
    arr[x] += a;
}

// 모든 구간의 시작점을 잡아봅니다.
let maxSum = 0;
for (let i = 0; i <= MAX_NUM; i++) {
    // 해당 구간 내 원소의 합을 구합니다.
    let sumAll = 0;
    for (let j = i - k; j <= i + k; j++) {
        if (j >= 0 && j <= MAX_NUM) {
            sumAll += arr[j];
        }
    }
    
    // 최댓값을 구합니다.
    maxSum = Math.max(maxSum, sumAll);
}

console.log(maxSum);