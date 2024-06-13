const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(''));
const queries = input.slice(1 + n, 1 + n + k).map(line => line.trim().split(' ').map(Number));

const MAX_C = 3;
const prefixSum = Array.from(Array(MAX_C + 1), () => 
    Array.from(Array(n + 1), () => Array(m + 1).fill(0))
);

// 특정 숫자 c에 대해 
// (x1, y1), (x2, y2) 직사각형 구간 내의 원소의 합을 반환합니다.
function getSum(c, x1, y1, x2, y2) {
    return prefixSum[c][x2][y2] - prefixSum[c][x1 - 1][y2] - 
           prefixSum[c][x2][y1 - 1] + prefixSum[c][x1 - 1][y1 - 1];
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        // 편의를 위해 
        // 입력받은 문자 a, b, c를 각각 
        // 1, 2, 3으로 바꿔서 저장해줍니다.
        if (arr[i - 1][j - 1] === 'a') {
            arr[i - 1][j - 1] = 1;
        } else if (arr[i - 1][j - 1] === 'b') {
            arr[i - 1][j - 1] = 2;
        } else {
            arr[i - 1][j - 1] = 3;
        }
    }
}

// 누적합 배열을 만들어줍니다.
// prefixSum[c][i][j] : 숫자가 c인 경우에 대한 누적합을 저장합니다.
for (let c = 1; c <= MAX_C; c++) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let additionalValue = 0;

            // (i, j) 위치에 적혀있는 숫자가 c인 경우에만
            // 값을 1 증가시켜줍니다.
            if (arr[i - 1][j - 1] === c)
                additionalValue = 1;

            prefixSum[c][i][j] = prefixSum[c][i - 1][j] +
                            prefixSum[c][i][j - 1] -
                            prefixSum[c][i - 1][j - 1] +
                            additionalValue;
        }
    }
}

// k개의 질의에 대한
// 답을 출력합니다.
queries.forEach(([x1, y1, x2, y2]) => {
    const ans = [];
    ans.push(getSum(1, x1, y1, x2, y2));
    ans.push(getSum(2, x1, y1, x2, y2));
    ans.push(getSum(3, x1, y1, x2, y2));
    console.log(ans.join(' '));
});