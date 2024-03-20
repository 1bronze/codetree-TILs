const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const arr = Array.from({ length: n }, () => Array(n).fill(0));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function inRange(x, y) {
    return 0 <= x && x < n && 0 <= y && y < n;
}

function adjacentCnt(x, y) {
    let cnt = 0;
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (inRange(nx, ny) && arr[nx][ny] === 1) {
            cnt += 1;
        }
    }
    return cnt;
}

for (let i = 1; i <= m; i++) {
    let [x, y] = input[i].split(' ').map(Number);
    x -= 1;
    y -= 1;
    arr[x][y] = 1;

    // 해당 칸을 탐색합니다.
    if (adjacentCnt(x, y) === 3) {
        console.log(1);
    } else {
        console.log(0);
    }
}