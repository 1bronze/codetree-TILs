const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const arr2 = Array.from(Array(2 * n + 1), () => Array(2 * n + 1).fill(0));
const prefixSum = Array.from(Array(2 * n + 1), () => Array(2 * n + 1).fill(0));
let ans = 0;

// 2차원 배열을 45도 회전시킵니다.
// 배열을 회전시키면 정사각형 부분합을 구하는 문제로
// 바뀌기 때문에 훨씬 접근하기 쉬워집니다.
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        arr2[i + j - 1][n - i + j] = arr[i - 1][j - 1];

// 2차원 배열의 누적합을 구합니다.
for (let i = 1; i <= 2 * n; i++)
    for (let j = 1; j <= 2 * n; j++)
        prefixSum[i][j] = prefixSum[i][j - 1] + prefixSum[i - 1][j] - prefixSum[i - 1][j - 1] + arr2[i][j];

// 한 변의 길이가 k2인 정사각형 중 부분합이 최대인 사각형을 찾습니다.
const k2 = Math.min(2 * k + 1, 2 * n);
for (let i = k2; i <= 2 * n; i++)
    for (let j = k2; j <= 2 * n; j++)
        ans = Math.max(ans, prefixSum[i][j] - prefixSum[i][j - k2] - prefixSum[i - k2][j] + prefixSum[i - k2][j - k2]);

// 정답을 출력합니다.
console.log(ans);