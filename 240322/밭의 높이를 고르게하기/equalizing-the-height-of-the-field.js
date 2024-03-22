const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// 모든 구간의 시작점을 잡아봅니다.
let minCost = Number.MAX_SAFE_INTEGER;
for (let i = 0; i <= n - t; i++) {
    // 해당 구간을 고르게 할 때의 비용을 구합니다.
    let cost = 0;
    for (let j = i; j < i + t; j++) {
        cost += Math.abs(arr[j] - h);
    }
    
    // 최솟값을 구합니다.
    minCost = Math.min(minCost, cost);
}

console.log(minCost);