const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const [n, m, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(''));
const queries = input.slice(1 + n, 1 + n + k).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => 
    Array.from(Array(m + 1), () => [0, 0, 0])
);

function charToNum(c) {
    let n;
    if (c === 'a') n = 0;
    if (c === 'b') n = 1;
    if (c === 'c') n = 2;
    return n;
}

function getSum(c, x1, y1, x2, y2) {
    let n = charToNum(c);
    return prefixSum[x2][y2][n] -
           prefixSum[x1 - 1][y2][n] -
           prefixSum[x2][y1 - 1][n] +
           prefixSum[x1 - 1][y1 - 1][n];
}

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
        for (let k = 0; k < 3; k++) {
            prefixSum[i][j][k] = prefixSum[i - 1][j][k] +
                                 prefixSum[i][j - 1][k] -
                                 prefixSum[i - 1][j - 1][k] +
                                 ((charToNum(arr[i - 1][j - 1]) === k) ? 1 : 0);
        }
    }
}

queries.forEach(([x1, y1, x2, y2]) => {
    const ans = [];
    ans.push(getSum('a', x1, y1, x2, y2));
    ans.push(getSum('b', x1, y1, x2, y2));
    ans.push(getSum('c', x1, y1, x2, y2));
    console.log(ans.join(' '));
});