const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력:
const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const dp = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
const start = Array.from(Array(n + 1), () => Array(n + 1).fill([0, 0]));
let ans = Number.MIN_SAFE_INTEGER;

function getSum(x1, y1, x2, y2) {
    return prefixSum[x2][y2] - 
           prefixSum[x1 - 1][y2] - 
           prefixSum[x2][y1 - 1] + 
           prefixSum[x1 - 1][y1 - 1];
}

function getExpandedSum(x, y) {
    let newSum = dp[x - 1][y - 1] + 
                 getSum(start[x - 1][y - 1][0], y, x, y) + 
                 getSum(x, start[x - 1][y - 1][1], x, y) - 
                 arr[x - 1][y - 1];
    let startX = start[x - 1][y - 1][0];
    let startY = start[x - 1][y - 1][1];
    return [newSum, startX, startY];
}

function getNewSum(x, y) {
    let [startX, startY] = [-1, -1];
    let newSum = Number.MIN_SAFE_INTEGER;

    for (let a = 1; a <= x; a++) {
        let target = getSum(a, y, x, y);

        if (newSum < target) {
            startX = a;
            startY = y;   
            newSum = target; 
        }
    }

    for (let b = 1; b <= y; b++) {
        let target = getSum(x, b, x, y);

        if (newSum < target) {
            startX = x;
            startY = b;
            newSum = target; 
        }
    }

    return [newSum, startX, startY];
}

// init prefixSum
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        prefixSum[i][j] = prefixSum[i - 1][j] + 
                          prefixSum[i][j - 1] - 
                          prefixSum[i - 1][j - 1] + 
                          arr[i - 1][j - 1];

// init dp
for (let a = 1; a <= n; a++) {
    let [newSum, startX, startY] = getNewSum(a, 1);
    dp[a][1] = newSum;
    start[a][1] = [startX, startY];
}
for (let b = 1; b <= n; b++) {
    let [newSum, startX, startY] = getNewSum(1, b);
    dp[1][b] = newSum;
    start[1][b] = [startX, startY];
}

for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
        let [newSum, startX, startY] = getExpandedSum(i, j);
        if (dp[i][j] < newSum) {
            dp[i][j] = newSum;
            start[i][j][0] = startX;
            start[i][j][1] = startY;
        }

        [newSum, startX, startY] = getNewSum(i, j);
        if (dp[i][j] < newSum) {
            dp[i][j] = newSum;
            start[i][j][0] = startX;
            start[i][j][1] = startY;
        }
    }
}

for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        ans = Math.max(ans, dp[i][j]);

console.log(ans);

// for (let i = 1; i <= n; i++) {
//     console.log(dp[i].slice(1,).join(" "));
// }