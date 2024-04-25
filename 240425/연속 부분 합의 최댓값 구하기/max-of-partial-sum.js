const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const INT_MIN = Number.MIN_SAFE_INTEGER;

// 변수 선언 및 입력
const n = Number(input[0]);
const a = [0].concat(input[1].trim().split(' ').map(Number));

// prefixSum[i] : 1번째부터 i번째까지 a배열 원소의 합을 저장하고 있습니다.
const prefixSum = new Array(n + 1).fill(0);

// 누적합 배열에 적절한 값을 채워줍니다.
function preprocess() {
    prefixSum[1] = a[1];

    for (let i = 2; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + a[i];
    }
}

// 배열 a의 i번째 원소부터 j번째 원소까지의 합을 반환합니다.
function sumInRange(i, j) {
    return prefixSum[j] - prefixSum[i] + a[i];
}

preprocess();

// 최댓값을 구해야 하는 문제이므로 초기값을 INT_MIN으로 설정합니다.
let ans = INT_MIN;

// 모든 연속 부분수열 쌍에 대해 그들의 합 중 최댓값을 계산합니다.
// 연속 부분수열이 i로 시작해서 j로 끝나는 (i, j)쌍을 전부 조사해야 합니다.
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        ans = Math.max(ans, sumInRange(i, j));
    }
}

console.log(ans);