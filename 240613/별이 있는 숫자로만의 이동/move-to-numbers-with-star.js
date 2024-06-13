const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const prefixSum = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

function inRange(target) {
    return target > 0 && target <= n;
}

function getSum(x, s, e) {
    return prefixSum[x][e] - prefixSum[x][s - 1];
}

function getManhattanSum(x, y) {
    let sum = 0;
    for (let i = x - k; i <= x + k; i++) {
        let dy = k - Math.abs(x - i);
        if (!inRange(i)) continue;

        let s = inRange(y - dy) ? y - dy : 1;
        let e = inRange(y + dy) ? y + dy : n;

        sum += getSum(i, s, e);
    }
    return sum;
}

for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
        prefixSum[i][j] = prefixSum[i][j - 1] + arr[i - 1][j - 1];

let ans = 0;
for (let i = 1; i <= n; i++)
    for (let j = 1; j <= n; j++)
    ans = Math.max(ans, getManhattanSum(i, j));

console.log(ans);