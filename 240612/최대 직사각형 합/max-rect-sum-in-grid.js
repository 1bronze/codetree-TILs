const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
let ans = Number.MIN_SAFE_INTEGER;

// (x1, y1), (x2, y2) 직사각형 구간 내의 원소의 합을 반환합니다.
function getSum(x1, y1, x2, y2) {
    return prefixSum[x2][y2] - prefixSum[x1 - 1][y2] - 
           prefixSum[x2][y1 - 1] + prefixSum[x1 - 1][y1 - 1];
}

// 시작행이 x1, 끝 행이 x2인 직사각형 중
// 가능한 최대 합을 반환합니다.
function getMaxArea(x1, x2) {
    // 시작행과 끝 행이 x1, x2로 정해지면,
    // 각 열마다 x1부터 x2까지 행에 적혀있는 숫자들을 누적했을 때
    // 마치 1차원에서 최대 연속 부분 수열의 합을 구하는 문제와 같아집니다.
    // 이는 동적계획법으로 간단히 해결이 가능합니다.
    const dp = new Array(n + 1).fill(0);

    for (let y = 1; y <= n; y++) {
        // y열에 있는 숫자들의 합을 구해줍니다.
        const sum = getSum(x1, y, x2, y);
        dp[y] = Math.max(sum, dp[y - 1] + sum);
    }

    // dp 값 중 최댓값이 원하는 값이 됩니다.
    let maxArea = Number.MIN_SAFE_INTEGER;
    for (let y = 1; y <= n; y++) {
        maxArea = Math.max(maxArea, dp[y]);
    }

    return maxArea;
}

// 누적합 배열을 만들어줍니다.
prefixSum[0][0] = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        prefixSum[i][j] = prefixSum[i - 1][j] + 
                          prefixSum[i][j - 1] - 
                          prefixSum[i - 1][j - 1] + 
                          arr[i - 1][j - 1];
    }
}

// 직사각형의
// 시작 행과 끝 행을 결정합니다.
// 각 쌍에 대해 가능한 직사각형 중
// 최대 합을 계산해
// 답과 비교하여 최댓값을 갱신해줍니다.
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        ans = Math.max(ans, getMaxArea(i, j));
    }
}

console.log(ans);