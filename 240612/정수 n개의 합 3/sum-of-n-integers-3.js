const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let ans = Number.MIN_SAFE_INTEGER;

// (x1, y1), (x2, y2) 직사각형 구간 내의 원소의 합을 반환합니다.
function getSum(x1, y1, x2, y2) {
    return prefixSum[x2][y2] - prefixSum[x1 - 1][y2] - 
           prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1];
}

// 누적합 배열을 만들어줍니다.
prefixSum[0][0] = 0;
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        prefixSum[i][j] = prefixSum[i - 1][j] +
                    prefixSum[i][j - 1] -
                    prefixSum[i - 1][j - 1] +
                    arr[i - 1][j - 1];

// 모든 직사각형에 대해 합을 찾아
// 그 중 최댓값을 갱신합니다.
for (let i = 1; i <= n - k + 1; i++)
    for (let j = 1; j <= n - k + 1; j++)
        ans = Math.max(ans, getSum(i, j, i + k - 1, j + k - 1));

console.log(ans);