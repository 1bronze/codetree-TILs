const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));

let ans = 0;

// 각 행마다 연속인 숫자의 개수 세기
for (let y = 0; y < n; y++) {
    let cnt = 1; let tmp = 1;
    for (let x = 1; x < n; x++) {
        if (arr[y][x] === arr[y][x - 1]) tmp++;
        else tmp = 1;
        cnt = Math.max(cnt, tmp);
    }
    if (cnt >= m) ans++;
}

for (let x = 0; x < n; x++) {
    let cnt = 1; let tmp = 1;
    for (let y = 1; y < n; y++) {
        if (arr[y][x] === arr[y - 1][x]) tmp++;
        else tmp = 1;
        cnt = Math.max(cnt, tmp);
    }
    if (cnt >= m) ans++;
}

console.log(ans);