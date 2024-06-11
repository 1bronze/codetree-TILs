const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let ans = Number.MIN_SAFE_INTEGER;

for (let y = 1; y <= n; y++) {
    for (let x = 1; x <= n; x++) {
        prefixSum[y][x] = prefixSum[y - 1][x] + prefixSum[y][x - 1] - prefixSum[y - 1][x - 1] + arr[y - 1][x - 1];
    }
}

for (let y = k; y <= n; y++) {
    for (let x = k; x <= n; x++) {
        ans = Math.max(ans, prefixSum[y][x] - prefixSum[y - k][x] - prefixSum[y][x - k] + prefixSum[y - k][x - k]);
    }
}

console.log(ans);