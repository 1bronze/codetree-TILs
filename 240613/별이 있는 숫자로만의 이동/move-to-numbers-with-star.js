const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let ans = 0;

// 배열의 누적합을 구합니다.
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        prefixSum[i][j] = prefixSum[i][j - 1] + arr[i - 1][j - 1];

// 모든 중심에 대해 최댓값을 구합니다.
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        // 중심이 (i, j)일 때의 숫자 합을 구합니다.
        let sumAll = 0;
        for (let r = i - k; r <= i + k; r++) {
            // r행일때 (j - c ~ j + c)열 까지의 부분합을 더해줍니다.
            const c = k - Math.abs(i - r);

            // r행이 범위 안에 있을 경우 부분합을 더해줍니다.
            if (1 <= r && r <= n) {
                sumAll += prefixSum[r][Math.min(j + c, n)] - prefixSum[r][Math.max(j - c - 1, 0)];
            }
        }
        ans = Math.max(ans, sumAll);
    }
}

// 정답을 출력합니다.
console.log(ans);