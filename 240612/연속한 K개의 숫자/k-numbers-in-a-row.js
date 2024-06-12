const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k, b] = input[0].trim().split(' ').map(Number);
const blank = input.slice(1, 1 + b).map(Number);
const prefixSum = new Array(n + 1).fill(0);
let ans = Number.MAX_SAFE_INTEGER;

function getSum(s, e) {
    return prefixSum[e] - prefixSum[s - 1];
}

blank.forEach(elem => prefixSum[elem] = 1);

for (let i = 1; i <= n; i++)
    prefixSum[i] += prefixSum[i - 1];

for (let s = 1; s <= n; s++) {
    const e = s + k - 1;
    if (e > n) continue;
    ans = Math.min(ans, getSum(s, e));
}

console.log(ans);