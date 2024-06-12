const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, q] = input[0].trim().split(' ').map(Number);
const num = input[1].trim().split(' ').map(Number);
const range = input.slice(2, 2 + q).map(line => line.trim().split(' ').map(Number));

const arr = new Array(1000001).fill(0);
const prefixSum = new Array(1000001).fill(0);

function getSum(s, e) {
    return prefixSum[e] - prefixSum[s] + arr[s];
}

num.forEach(elem => arr[elem] = 1);

prefixSum[0] = arr[0];
for (let i = 1; i <= 1000000; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

range.forEach(([i, j]) => console.log(getSum(i, j)));