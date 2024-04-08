const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(line => line.trim().split(' ').map(Number));

let ans = 0;

// 각 행마다 연속인 숫자의 개수 세기
for (let y = 0; y < n; y++) {
    let cnt = 1; // 초기에는 무조건 1개의 연속 수열을 가짐
    for (let x = 0; x < n; x++) {
        if (x == 0) cnt = 1;
        else if (arr[y][x] === arr[y][x - 1]) cnt++;
        else {
            if (cnt >= m) ans++;
            cnt = 1;
        }
    }
    if (cnt >= m) ans++;
}

for (let x = 0; x < n; x++) {
    let cnt = 1; // 초기에는 무조건 1개의 연속 수열을 가짐
    for (let y = 0; y < n; y++) {
        if (y == 0) cnt = 1;
        else if (arr[y][x] === arr[y - 1][x]) cnt++;
        else {
            if (cnt >= m) ans++;
            cnt = 1;
        }
    }
    if (cnt >= m) ans++;
}

console.log(ans);