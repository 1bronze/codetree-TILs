const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

// 변수 선언 및 입력
const [n, k] = input[0].trim().split(' ').map(Number);
const arr = [0].concat(input[1].trim().split(' ').map(Number));
const prefixSum = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++)
    prefixSum[i] = prefixSum[i - 1] + arr[i];

let ans = 0;
for (let len = 1; len <= n; len++) {
    for (let s = 1; s <= n; s++) {
        let e = s + len - 1;
        if (e > n) continue;
        if (prefixSum[e] - prefixSum[s - 1] === k) ans++;
    }
}

// for (let s = 1; s <= n; s++) {
//     for (let e = s; e <= n; e++) {
//         if (prefixSum[e] - prefixSum[s - 1] === k)
//             ans++;
//     }
// }

console.log(ans);