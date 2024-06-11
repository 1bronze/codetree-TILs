const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));
const prefixSum = new Array(n).fill(0);
let ans = Number.MIN_SAFE_INTEGER;

// [s, e] 구간 내의 원소의 합을 반환합니다.
function getSum(s, e) {
    return prefixSum[e] - prefixSum[s - 1];
}

// 누적합 배열을 만들어줍니다.
prefixSum[0] = 0;
for (let i = 1; i <= n; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

// 모든 구간에 대해 합을 찾아
// 그 중 최댓값을 갱신합니다.
for (let i = 1; i < n - k + 2; i++)
    ans = Math.max(ans, getSum(i, i + k - 1));

console.log(ans);