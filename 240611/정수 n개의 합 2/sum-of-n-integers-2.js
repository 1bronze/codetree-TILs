const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].trim().split(' ').map(Number);
const num = input[1].trim().split(' ').map(Number);
const sum = new Array(n).fill(0);

sum[0] = num[0];
for (let i = 1; i < n; i++)
    sum[i] = sum[i - 1] + num[i];

let ans = sum[k - 1];
for (let i = k; i < n; i++)
    ans = Math.max(ans, sum[i] - sum[i - k]);

console.log(ans);