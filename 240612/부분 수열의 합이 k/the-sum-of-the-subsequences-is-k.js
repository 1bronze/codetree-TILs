const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));
const prefixSum = new Array(n + 1).fill(0);
let ans = 0;

function getSum(s, e) {
    return prefixSum[e] - prefixSum[s - 1];
}

// 누적합 배열을 만들어줍니다.
prefixSum[0] = 0;
for (let i = 1; i <= n; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

// 모든 구간에 대해 합을 찾아
// 그 중 합이 k인 경우의 수를 세줍니다.
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        if (getSum(i, j) === k)
            ans++;
    }
}

console.log(ans);