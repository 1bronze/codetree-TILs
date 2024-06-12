const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, q] = input[0].trim().split(' ').map(Number);
const points = input[1].trim().split(' ').map(Number);
const query = input.slice(2, 2 + q).map(line => line.trim().split(' ').map(Number));

const MAX_A = 1000000;
const arr = new Array(MAX_A + 1).fill(0);
const prefixSum = new Array(MAX_A + 1).fill(0);

// [s, e] 구간 내의 원소의 합을 반환합니다.
function getSum(s, e) {
    return prefixSum[e] - prefixSum[s] + arr[s];
}

// 해당 점들이 주어진 자리에
// 숫자 1을 적어줍니다.
points.forEach(point => arr[point] = 1);

// 누적합 배열을 만들어줍니다.
prefixSum[0] = arr[0];
for (let i = 1; i <= MAX_A; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

// q번에 걸쳐 범위에 있는 점의 개수를 계산합니다.
query.forEach(([i, j]) => console.log(getSum(i, j)));