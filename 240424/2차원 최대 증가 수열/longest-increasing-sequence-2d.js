const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const num = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));
const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(0));


for (let i = 0; i < n; i++)
    dp[i][0] = 1;

for (let i = 0; i < m; i++)
    dp[0][i] = 1;

for (let x = 1; x < m; x++) {
    for (let y = 1; y < n; y++) {

        for (let j = 0; j < x; j++) {
            for (let i = 0; i < y; i++) {
                if (num[y][x] > num[i][j])
                    dp[y][x] = Math.max(dp[y][x], dp[i][j] + 1);
            }
        }
    }
}

let ans = 0;
for (let x = 0; x < m; x++)
    for (let y = 0; y < n; y++)
        ans = Math.max(ans, dp[y][x]);

console.log(ans);