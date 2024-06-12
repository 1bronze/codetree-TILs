const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, k, b] = input[0].trim().split(' ').map(Number);
const blank = input.slice(1, 1 + b).map(Number);
const arr = new Array(n + 1).fill(0);
const prefixSum = new Array(n + 1).fill(0);
let ans = Number.MAX_SAFE_INTEGER;

// [s, e] 구간 내의 원소의 합을 반환합니다.
function getSum(s, e) {
    return prefixSum[e] - prefixSum[s - 1];
}

// 해당 숫자들이 주어진 자리에
// 숫자 1을 적어줍니다.
blank.forEach(elem => arr[elem] = 1);

// 누적합 배열을 만들어줍니다.
prefixSum[0] = 0;
for (let i = 1; i <= n; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

// 모든 구간에 대해 합을 찾아
// 그 중 최솟값을 갱신합니다.
for (let i = 1; i <= n - k + 1; i++)
    ans = Math.min(ans, getSum(i, i + k - 1));

console.log(ans);